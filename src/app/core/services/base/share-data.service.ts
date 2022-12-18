import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private searchCriterias = new Subject<string>();

  constructor() {}

  setSearchCriterias(searchCriterias: string) {
    this.searchCriterias.next(searchCriterias);
  }

  getSearchCriterias() {
    return this.searchCriterias.asObservable();
  }
}
