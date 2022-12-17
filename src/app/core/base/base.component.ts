import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  template: ``
})
export class BaseComponent implements OnDestroy {

  unsubscribe: Subject<void>;
  subscriptions: Subscription;

  
  constructor() {
    this.unsubscribe = new Subject<void>();
    this.subscriptions = new Subscription();
    
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.subscriptions.unsubscribe();
  }
}
