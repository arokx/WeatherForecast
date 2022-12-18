import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { CurrentForecast } from '@core/models/current-forecast.model';
import { Current } from '@core/models/current-weather.model';
import { Location } from '@core/models/location.model';
import { CurrentWeatherService } from '../services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent extends BaseComponent implements OnInit {
  currentForecast: CurrentForecast | undefined;
  location: Location | undefined;
  current: Current | undefined;

  constructor(private currentWeatherService: CurrentWeatherService) {
    super();
  }

  ngOnInit(): void {
    this.loadCurrentWeather();
  }

  loadCurrentWeather() {
    this.subscriptions.add(
      this.currentWeatherService.loadCurrentWeather("London").subscribe((res) => {
        if (res) {
          this.currentForecast = res;
          this.location = res.location;
          this.current = res.current;
          
        }
      })
    );
  }
}
