import { Injectable, Optional, Inject } from "@angular/core";
import { ID_CLIENT } from "../google-login.config";
import { Observable, of, fromEvent, Observer, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoadGoogleApiService {
  gauth: gapi.auth2.GoogleAuth = null;
  loader$: Observable<gapi.auth2.GoogleAuth> = null;
  private idClient: string;

  constructor(@Optional() @Inject(ID_CLIENT) idClient: string) {
    if (!idClient) {
      throw new Error(
        "GoogleLoginModule: You must call forRoot in your AppModule to pass the CLIENT_ID"
      );
    }

    this.idClient = idClient;
  }

  getAuthApi(): Observable<gapi.auth2.GoogleAuth> {
    if (!this.gauth) {
      // Not finished initialization
      if (!this.loader$) {
        // Initialization not started
        this.loader$ = this.createLoader();
      }
      return this.loader$; // Return observable (emits auth API when loaded)
    }
    return of(this.gauth); // Already loaded
  }

  private createLoader(): Observable<gapi.auth2.GoogleAuth> {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api:client.js";
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    document.body.appendChild(script);

    return fromEvent(script, "load").pipe(
      switchMap(e => {
        return new Observable<gapi.auth2.GoogleAuth>(
          (observer: Observer<gapi.auth2.GoogleAuth>) => {
            gapi.load("auth2", () => {
              const gauth: gapi.auth2.GoogleAuth = gapi.auth2.init({
                client_id: this.idClient,
                cookie_policy: 'single_host_origin'
              });
              this.gauth = gauth;
              observer.next(gauth);
              observer.complete();
            });
          }
        ).pipe(
          catchError(error => {
            console.error(error);
            return throwError("Error loading the Google API!");
          })
        );
      })
    );
  }
}
