# WeatherForecast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0. I have used [Weatherapi.com](https://www.weatherapi.com/) to retrive the weather data. [Google API](https://developers.google.com/maps) are used to track the current geo location.

I have added a generic API service to handle API calls, and also added a base component to unsubscribe the subscriptions. These both can be extended further.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Instructions

Application is using google apis to track the Geo locations of the user. Therefore please allow location permission on the browser

Weatherapi.com documentation says they provide maximum 10 days forecast for free. But they allow maximum 3 days. Note that as well
