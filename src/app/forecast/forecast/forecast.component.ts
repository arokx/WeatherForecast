import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { Forecast } from '@core/models/forecast.model';
import { Location } from '@core/models/location.model';
import { ShareDataService } from '@core/services/share-data.service';
import { environment } from 'src/environments/environment';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent extends BaseComponent implements OnInit {
  forecast: Forecast | undefined;
  searchCriteria: string = '';
  location: Location | undefined;

  constructor(
    private forecastService: ForecastService,
    private shareDataService: ShareDataService
  ) {
    super();
    this.subscriptions.add(
      this.shareDataService.getSearchCriterias().subscribe((res) => {
        if (res) {
          this.searchCriteria = res;
          this.loadWeatherForecast(this.searchCriteria);
        }
      })
    );
  }

  ngOnInit(): void {
    this.loadWeatherForecast(this.searchCriteria);
  }

  loadWeatherForecast(searchCriteria: string) {
    this.subscriptions.add(
      this.forecastService
        .loadWeatherForecast(this.getSearchCriteria(searchCriteria))
        .subscribe((res) => {
          if (res) {
            this.forecast = res.forecast;
            this.location = res.location;
            this.shareDataService.setSearchedCity(this.location?.name!);
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
