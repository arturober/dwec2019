import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
