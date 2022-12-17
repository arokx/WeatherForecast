import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastModule } from './forecast/forecast.module';
import { CurrentWeatherModule } from './current-weather/current-weather.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ForecastModule,
    CurrentWeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
