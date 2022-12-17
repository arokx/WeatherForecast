import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
