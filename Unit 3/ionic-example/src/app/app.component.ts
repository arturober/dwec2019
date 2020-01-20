import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'menu'
    },
    {
      title: 'Alerts',
      url: '/alerts',
      icon: 'alert'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'logo-buffer'
    },
    {
      title: 'Lists',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'text'
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: 'albums'
    },
    {
      title: 'Checkbox & Radio',
      url: '/checkbox-radio',
      icon: 'checkbox'
    },
    {
      title: 'Badges',
      url: '/badges',
      icon: 'square'
    },
    {
      title: 'Tabs',
      url: '/tabs',
      icon: 'copy'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alert'
    },
    {
      title: 'Fabs',
      url: '/fabs',
      icon: 'add-circle'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
