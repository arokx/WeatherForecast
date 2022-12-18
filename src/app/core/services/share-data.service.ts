import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private searchCriterias$ = new Subject<string>();
  private searchCriteria: string = '';

  constructor() {}

  setSearchCriterias(searchCriterias: string) {
    this.searchCriteria = searchCriterias;
    this.searchCriterias$.next(searchCriterias);
  }

  getSearchCriterias() {
    return this.searchCriterias$.asObservable();
  }

  getSearchCriteriasText() {
    return this.searchCriteria;
  }
}
