import { Injectable } from '@angular/core';
import { ApiBaseService } from '@core/services/base/api-base.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  constructor(private apiBaseService: ApiBaseService) {}


  loadCurrentWeather(): Observable<any> {
    let current = 'current.json';
    let key = `?key=${environment.key}`;
    let parameters = `&q=London&aqi=no`;
    let path = current + key + parameters;
    return this.apiBaseService.get<any>([path]);
  }


}
