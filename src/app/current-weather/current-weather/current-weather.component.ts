import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
