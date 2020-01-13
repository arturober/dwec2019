import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginModule } from './google-login/google-login.module';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FacebookLoginModule } from './facebook-login/facebook-login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleLoginModule.forRoot('667204529710-2b9jd5idoqepfe6ahpq3qo9kvtkmpdcb.apps.googleusercontent.com'),
    FacebookLoginModule.forRoot({
      appId: '452581145459274',
      version: 'v5.0'
    }),
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
