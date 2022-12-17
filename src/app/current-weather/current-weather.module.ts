import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { CurrentWeatherRoutingModule } from './current-weather-routing.module';



@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    CurrentWeatherRoutingModule
  ]
})
export class CurrentWeatherModule { }
