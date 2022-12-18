import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastModule } from './forecast/forecast.module';
import { CurrentWeatherModule } from './current-weather/current-weather.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '@blocks/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ForecastModule,
    CurrentWeatherModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
