import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { CurrentForecast } from '@core/models/current-forecast.model';
import { Current } from '@core/models/current-weather.model';
import { Location } from '@core/models/location.model';
import { ShareDataService } from '@core/services/share-data.service';
import { environment } from 'src/environments/environment';
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
  searchCriteria: string = '';

  constructor(
    private currentWeatherService: CurrentWeatherService,
    private shareDataService: ShareDataService
  ) {
    super();
    this.subscriptions.add(
      this.shareDataService.getSearchCriterias().subscribe((res) => {
        this.searchCriteria = res;
        this.loadCurrentWeather(this.searchCriteria);
      })
    );
  }

  ngOnInit(): void {
    this.loadCurrentWeather(this.searchCriteria);
  }

  loadCurrentWeather(searchCriteria: string) {
    this.subscriptions.add(
      this.currentWeatherService
        .loadCurrentWeather(this.getSearchCriteria(searchCriteria))
        .subscribe((res) => {
          if (res) {
            this.currentForecast = res;
            this.location = res.location;
            this.current = res.current;
          }
        })
    );
  }

  getSearchCriteria(searchCriteria: string): string {
    if (searchCriteria == '') {
      if (this.shareDataService.getSearchCriteriasText() != '')
        return this.shareDataService.getSearchCriteriasText();
      else return (searchCriteria = environment.defaultSearchCriteria);
    } else {
      return searchCriteria;
    }
  }
}
