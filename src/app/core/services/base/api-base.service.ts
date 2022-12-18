import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { SpinnerService } from '@core/services/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  private baseUrl: string = environment.baseApi;
  private defaultVersion: string = environment.defaultApiVersion;

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService
  ) {
    this.baseUrl = environment.baseApi;
    this.defaultVersion = environment.defaultApiVersion;
  }

  public get<T>(path: string[], options?: {}): Observable<T> {
    const version = this.defaultVersion;
    const apiPath = this.getApiUrl(path.join('/'), version);
    this.spinnerService.show();
    return this.httpClient.get(apiPath, {}).pipe(
      map((data) => {
        const apiData = data as any;
        this.spinnerService.hide();
        return apiData;
      }),
      catchError((err) => {
        this.showErrors(err.error);
        this.spinnerService.hide();
        return throwError(err);
      })
    );
  }
  private showErrors(error: any): void {
    if (error != null) {
      console.log(error?.error?.message);
      this.notificationService.show({
        content: error?.error?.message,
        cssClass: 'button-notification',
        animation: { type: 'slide', duration: 400 },
        position: { horizontal: 'center', vertical: 'top' },
        type: { style: 'error', icon: true },
        closable: true,
      });
    }
  }

  private getApiUrl(path: string, version: string): string {
    return `${this.baseUrl}/${version}/${path}`;
  }
}
