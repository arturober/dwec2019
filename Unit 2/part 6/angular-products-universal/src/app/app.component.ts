import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  group,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('productList => productDetail', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        group([
          query(':leave', [
            animate('0.5s', style({ transform: 'translateX(-100%)' }))
          ]),
          query(':enter', [animate('0.5s', style({ transform: 'none' }))])
        ])
      ]),
      transition('productDetail => productList', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        group([
          query(':leave', [
            animate('0.5s', style({ transform: 'translateX(100%)' }))
          ]),
          query(':enter', [animate('0.5s', style({ transform: 'none' }))])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Angular Products';

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation || 'None';
  }
}
