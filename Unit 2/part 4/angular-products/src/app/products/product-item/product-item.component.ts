import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

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

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  changeColor() {
    this.color = Math.floor(Math.random() * 4);
  }

  changeRating(rating: number) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.productsService.changeRating(this.product.id, rating).subscribe({
      error: error => this.product.rating = oldRating
    });
  }
}
