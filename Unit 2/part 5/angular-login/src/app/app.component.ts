import { Component } from '@angular/core';

@Component({
  selector: 'al-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: gapi.auth2.GoogleUser = null;
  fbToken = '';

  login(user: gapi.auth2.GoogleUser) {
    this.user = user;
  }

  loginFB(resp: FB.LoginStatusResponse) {
    this.fbToken = resp.authResponse.accessToken;
  }

  showError(error: any) {
    console.log(error);
  }
}
