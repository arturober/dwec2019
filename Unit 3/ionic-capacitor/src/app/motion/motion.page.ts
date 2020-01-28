import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plugins, PluginListenerHandle, MotionOrientationEventResult } from '@capacitor/core';
const { Motion } = Plugins;

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
})
export class MotionPage implements OnInit, OnDestroy {
  accelListener: PluginListenerHandle;
  orientListener: PluginListenerHandle;
  acceleration = { x: 0, y: 0, z: 0};
  orientation = {alpha: 0, beta: 0, gamma: 0};

  constructor() { }

  ngOnInit() {
    this.accelListener = Motion.addListener('accel', event => {
      this.acceleration = event.acceleration;
    });
    this.orientListener = Motion.addListener('orientation', event => {
      this.orientation.alpha = event.alpha;
      this.orientation.beta = event.beta;
      this.orientation.gamma = event.gamma;
    });
  }

  ngOnDestroy() {
    this.accelListener.remove();
    this.orientListener.remove();
  }
}
