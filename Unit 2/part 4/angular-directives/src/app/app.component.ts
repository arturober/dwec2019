import { Component } from '@angular/core';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';
  color = 'yellow';

  prods = [{
    name: 'Chair',
    price: 26
  }, {
    name: 'Table',
    price: 87
  }, {
    name: 'Mouse',
    price: 9.99
  }];

  filter = p => p.price < 40;
}
