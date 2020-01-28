import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plugins, AppUrlOpen, PluginListenerHandle } from '@capacitor/core';
const { App, Modals } = Plugins;

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage implements OnInit, OnDestroy {
  backHandler: PluginListenerHandle;

  constructor() {}

  ngOnInit() {
    this.backHandler = App.addListener('backButton', async (data: AppUrlOpen) => {
      const resp = await Modals.confirm({
        title: 'Close app',
        message: 'Do you really want to exit?',
        okButtonTitle: 'Yes, please',
        cancelButtonTitle: 'Never'
      });

      if (resp.value) {
        App.exitApp();
      }
    });
  }

  ngOnDestroy() {
    this.backHandler.remove();
  }
}
