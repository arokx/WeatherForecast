import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '@core/services/share-data.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  searchCriterias: string = '';

  constructor(private shareDataService: ShareDataService) {}

  search() {
    // pass and store entered search criteria in the datashare service
    if (this.searchCriterias)
      this.shareDataService.setSearchCriterias(this.searchCriterias);
  }
}
