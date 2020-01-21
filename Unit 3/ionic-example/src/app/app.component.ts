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
      title: 'Badges',
      url: '/badges',
      icon: 'square'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'logo-buffer'
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
      title: 'Fabs',
      url: '/fabs',
      icon: 'add-circle'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'grid'
    },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'text'
    },
    {
      title: 'Lists',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Loading',
      url: '/loading',
      icon: 'refresh'
    },
    {
      title: 'Popover',
      url: '/popover',
      icon: 'albums'
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
