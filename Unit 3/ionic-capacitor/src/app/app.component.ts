import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'clipboard'
    },
    {
      title: 'Device Info',
      url: '/device',
      icon: 'phone-portrait'
    },
    {
      title: 'Filesystem',
      url: '/filesystem',
      icon: 'folder'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'pin'
    },
    {
      title: 'Keyboard',
      url: '/keyboard',
      icon: 'keypad'
    },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'notifications'
    },
    {
      title: 'Vibration',
      url: '/vibration',
      icon: 'pulse'
    },
  ];

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
      StatusBar.setBackgroundColor({color: '#3880ff'});
      StatusBar.setStyle({style: StatusBarStyle.Dark});
    });
  }
}
