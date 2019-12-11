import { Injectable, Optional, Inject } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { FB_CONFIG, FBConfig } from '../facebook-login.config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadFbApiService {
  private appId: string;
  private version: string;
  private isLoaded = false;
  private loader$: Observable<void> = null;

  constructor(@Optional() @Inject(FB_CONFIG) fbConfig: FBConfig) {
    if (!fbConfig) {
      throw new Error(
        'FacebookLoginModule: You must call forRoot in your AppModule to pass the APP_ID and Version'
      );
    }
    this.appId = fbConfig.appId;
    this.version = fbConfig.version;
  }

  loadApi(): Observable<void> {
    if (!this.isLoaded) {
      if (!this.loader$) {
        this.loader$ = this.loadScript();
      }
      return this.loader$;
    }
    return of(null);
  }

  login(scopes: string): Observable<FB.LoginStatusResponse> {
    return this.isLogged().pipe(
      catchError(response => {
        return new Observable((observer: Observer<FB.LoginStatusResponse>) => {
          FB.login(
            (respLogin: FB.LoginStatusResponse) => {
              if (respLogin.status === 'connected') {
                observer.next(respLogin);
              } else {
                observer.error(respLogin);
              }
              observer.complete();
            },
            { scope: scopes }
          );
        });
      })
    );
  }

  isLogged(): Observable<FB.LoginStatusResponse> {
    return new Observable((observer: Observer<FB.LoginStatusResponse>) => {
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          observer.next(response);
        } else {
          observer.error(response);
        }
        observer.complete();
      });
    });
  }

  private loadScript(): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      window.fbAsyncInit = () => {
        FB.init({
          appId: this.appId,
          xfbml: true,
          version: this.version
        });
        this.isLoaded = true;
        observer.next(null);
        observer.complete();
      };
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/es_ES/sdk.js';
      script.setAttribute('async', '');
      script.setAttribute('defer', '');
      document.body.appendChild(script);
    });
  }
}
