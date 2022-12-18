import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    private spinnerService: SpinnerService
  ) {
    this.baseUrl = environment.baseApi;
    this.defaultVersion = environment.defaultApiVersion;
  }

  //generic get request to get data
  public get<T>(path: string[], options?: {}): Observable<T> {
    const version = this.defaultVersion;
    const apiPath = this.getApiUrl(path.join('/'), version);
    //make spinner visible
    this.spinnerService.show();
    return this.httpClient.get(apiPath, {}).pipe(
      map((data) => {
        const apiData = data as any;
        //hide the spinner
        this.spinnerService.hide();
        return apiData;
      }),
      catchError((err) => {
        this.showErrors(err.error);
        return throwError(err);
      })
    );
  }

  //handle the errors
  private showErrors(error: any): void {
    if (error != null) {
      console.log(error?.error?.message);
    }
  }

  //create the api url
  private getApiUrl(path: string, version: string): string {
    return `${this.baseUrl}/${version}/${path}`;
  }
}
