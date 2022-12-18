import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private showSpinner: boolean = false;
  private isSpinningSubject = new BehaviorSubject<boolean>(this.showSpinner);  
 


  public isSpinning$ = this.isSpinningSubject.asObservable();

  constructor() { }

  public show(): void {
    this.showSpinner = true;
    this.isSpinningSubject.next(this.showSpinner);
  }

  public hide(): void {
    this.showSpinner = false;
    this.isSpinningSubject.next(this.showSpinner);
  }
}
