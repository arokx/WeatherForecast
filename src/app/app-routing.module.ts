import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'current',
    loadChildren: () => import('src/app/current-weather/current-weather.module')
      .then(m => m.CurrentWeatherModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('src/app/forecast/forecast.module')
      .then(m => m.ForecastModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
