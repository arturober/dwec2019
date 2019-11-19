import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  headers = {
    image: 'Image',
    description: 'Product',
    price: 'Price',
    available: 'Available',
    rating: 'Rating'
  };
  showImage = true;
  filterSearch = '';

  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
