import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiBaseService } from '@core/services/base/api-base.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private apiBaseService: ApiBaseService) {}

  loadWeatherForecast(searchCriteria: string): Observable<any> {
    if (searchCriteria == '') {
      if (localStorage.getItem('GeoLocation')?.toString()!) {
        searchCriteria = localStorage.getItem('GeoLocation')?.toString()!;
      } else {
        searchCriteria = environment.defaultSearchCriteria;
      }
    }
    return this.apiBaseService.get<any>([this.createPath(searchCriteria)]);
  }

  createPath(searchCriteria: string): string {
    let forecast = 'forecast.json';
    let key = `?key=${environment.key}`;
    let parameters = `&q=${searchCriteria}&days=10&aqi=no&alerts=no`;
    let path = forecast + key + parameters;

    return path;
  }
}
