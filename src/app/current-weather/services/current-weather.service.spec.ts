import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CurrentWeatherService } from './current-weather.service';

describe('CurrentWeatherService', () => {
  let httpTestingController: HttpTestingController;
  let service: CurrentWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CurrentWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Current Weather Data should use GET to retrieve data', () => {
    service.loadCurrentWeather('London').subscribe();

    const testRequest = httpTestingController.expectOne(
      'http://api.weatherapi.com/v1/current.json?key=6c26074ad39d454eb9f132032221512&q=London&aqi=no'
    );

    expect(testRequest.request.method).toEqual('GET');
  });
  //No matching location found.
  it('Current Weather Data should return No matching location found message when enters an unmatching location', (done) => {
    const expectedData = [
      {
        "error": {
            "code": 1006,
            "message": "No matching location found."
        }
    }
    ];
    service.loadCurrentWeather('Losdfdsfn').subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });
    const testRequest = httpTestingController.expectOne(
      'http://api.weatherapi.com/v1/current.json?key=6c26074ad39d454eb9f132032221512&q=Losdfdsfn&aqi=no'
    );

    testRequest.flush(expectedData);
  });

  it('Current Weather Data should return expected data', (done) => {
    const expectedData = [
      {
        "location": {
            "name": "London",
            "region": "City of London, Greater London",
            "country": "United Kingdom",
            "lat": 51.52,
            "lon": -0.11,
            "tz_id": "Europe/London",
            "localtime_epoch": 1671331279,
            "localtime": "2022-12-56"
        },
        "current": {
            "last_updated_epoch": 1671330600,
            "last_updated": "2022-12-18 02:30",
            "temp_c": -1.0,
            "temp_f": 30.2,
            "is_day": 0,
            "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                "code": 1000
            },
            "wind_mph": 8.1,
            "wind_kph": 13.0,
            "wind_degree": 110,
            "wind_dir": "ESE",
            "pressure_mb": 1022.0,
            "pressure_in": 30.18,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 93,
            "cloud": 0,
            "feelslike_c": -4.1,
            "feelslike_f": 24.6,
            "vis_km": 6.0,
            "vis_miles": 3.0,
            "uv": 1.0,
            "gust_mph": 11.2,
            "gust_kph": 18.0
        }
    }
    ];
 
    service.loadCurrentWeather("London").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
 
    const testRequest = httpTestingController.expectOne(
      'http://api.weatherapi.com/v1/current.json?key=6c26074ad39d454eb9f132032221512&q=London&aqi=no'
    );
 
    testRequest.flush(expectedData);
  });

});
