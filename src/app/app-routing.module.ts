import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CURRENT, FORECAST } from '@core/constants/app-urls.constant';

const routes: Routes = [
  {
    path: `${CURRENT}`,
    loadChildren: () => import('src/app/current-weather/current-weather.module')
      .then(m => m.CurrentWeatherModule)
  },
  {
    path: `${FORECAST}`,
    loadChildren: () => import('src/app/forecast/forecast.module')
      .then(m => m.ForecastModule)
  }, 
  {
    path:'**',
    redirectTo:`${CURRENT}`
  },
  { 
    path: '',
    redirectTo: `${CURRENT}`, 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
