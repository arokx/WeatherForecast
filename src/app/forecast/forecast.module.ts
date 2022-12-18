import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';



@NgModule({
  declarations: [
    ForecastComponent,
    ForecastDetailComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ]
})
export class ForecastModule { }
