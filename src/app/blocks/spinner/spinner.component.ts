import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@core/services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {

  public isSpinnerVisible: boolean = false;
  private spinnerSubscription: Subscription | undefined;

  constructor(
    private spinnerService: SpinnerService
  ) { }


  ngOnInit(): void {
    this.subscribeToSpinnerService();
  }

  ngOnDestroy() {
    this.spinnerSubscription!.unsubscribe();
  }

  private subscribeToSpinnerService(): void {
    this.spinnerSubscription = this.spinnerService.isSpinning$.subscribe((showSpinner: boolean) => {
      if (showSpinner) {
        this.isSpinnerVisible = true;
      } else {
        this.isSpinnerVisible = false;
      }
    });
  }
}
