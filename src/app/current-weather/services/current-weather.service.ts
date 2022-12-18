import { Injectable } from '@angular/core';
import { ApiBaseService } from '@core/services/base/api-base.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  constructor(private apiBaseService: ApiBaseService) {}

  loadCurrentWeather(searchCriteria: string): Observable<any> {
    if (searchCriteria == '') searchCriteria = 'London';
    return this.apiBaseService.get<any>([this.createPath(searchCriteria)]);
  }

  createPath(searchCriteria: string): string {
    let current = 'current.json';
    let key = `?key=${environment.key}`;
    let parameters = `&q=${searchCriteria}&aqi=no`;
    let path = current + key + parameters;

    return path;
  }
}
