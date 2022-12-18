import { Component, Input, OnInit } from '@angular/core';
import { Forecastday } from '@core/models/forecast-forecastday';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.scss'],
})
export class ForecastDetailComponent implements OnInit {
  @Input() forecastDay: Forecastday | undefined;

  constructor() {}

  ngOnInit(): void {}
}
