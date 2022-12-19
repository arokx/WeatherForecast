import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { ShareDataService } from '@core/services/share-data.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent extends BaseComponent {
  searchCriterias: string = '';

  constructor(private shareDataService: ShareDataService) {
    super();
    //Set current location city name on search textbox
    this.subscriptions.add(this.shareDataService.getSearchedCity().subscribe((res) => {
      if (res) this.searchCriterias = res;
    })
    );
  }

  search() {
    // pass and store entered search criteria in the datashare service
    this.shareDataService.setSearchCriterias(this.searchCriterias);
  }
}
