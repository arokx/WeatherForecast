import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { CurrentWeatherService } from '../services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent extends BaseComponent implements OnInit {
  constructor(private currentWeatherService: CurrentWeatherService) {
    super();
  }

  ngOnInit(): void {
    this.loadCurrentWeather();
  }

  loadCurrentWeather() {
    this.subscriptions.add(
      this.currentWeatherService.loadCurrentWeather().subscribe((res) => {
        console.log(res);
      })
    );
  }
}
