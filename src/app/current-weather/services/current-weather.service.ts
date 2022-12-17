import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  constructor(private http: HttpClient) {}

  loadCurrentWeather() {
    return this.http.get(
      'http://api.weatherapi.com/v1/current.json?key=6c26074ad39d454eb9f132032221512&q=London&aqi=no'
    );
  }
}
