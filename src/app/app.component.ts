import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ShareDataService } from '@core/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 0;
  address: string = '';
  private geoCoder: any;

  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private shareDataService: ShareDataService
  ) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        if (this.latitude != 0 && this.longitude != 0)
          this.shareDataService.setSearchCriterias(
            this.latitude.toString() + ',' + this.longitude
          );

        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results: any, status: any) => {
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
            window.alert(this.address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }
}
