import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private searchCriterias$ = new Subject<string>();
  private searchCriteria: string = '';
  private city$ = new Subject<string>();

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

  setSearchedCity(city:string){
    return this.city$.next(city);
  }

  getSearchedCity(){
    return this.city$.asObservable();
  }
}
