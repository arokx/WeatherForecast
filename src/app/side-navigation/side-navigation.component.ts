import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { ShareDataService } from '@core/services/share-data.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent extends BaseComponent {
  searchCriterias: string = '';
  longtitude: string = '';
  lattitude: string = '';

  options: any = {};

  constructor(private shareDataService: ShareDataService) {
    super();
  }

  handleAddressChange(address: Address) {
    this.lattitude = address.geometry.location.lat().toString();
    this.longtitude = address.geometry.location.lng().toString();
    if (this.lattitude != '' && this.longtitude != '') {
      this.searchCriterias = this.lattitude.toString() + ',' + this.longtitude;
      this.shareDataService.setSearchCriterias(this.searchCriterias);
    }
  }
}
