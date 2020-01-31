import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { AuthService } from './auth/services/auth.service';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menuDisabled = true;
  public appPages = [
    {
      title: 'Product list',
      url: '/products',
      icon: 'home'
    },
    {
      title: 'Add product',
      url: '/products/add',
      icon: 'add-circle'
    },
  ];

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private nav: NavController,
  ) {
    this.initializeApp();
    this.authService.loginChange$.subscribe(
      logged => this.menuDisabled = !logged
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
      StatusBar.setBackgroundColor({color: '#3880ff'});
      StatusBar.setStyle({style: StatusBarStyle.Dark});
    });
  }

  async logout() {
    await this.authService.logout();
    this.nav.navigateRoot(['/auth/login']);
  }
}
