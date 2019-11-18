import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showImage: boolean;

  colors = ['red', 'green', 'blue', 'yellow'];
  color = 0;

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.color = Math.floor(Math.random() * 4);
  }
}
