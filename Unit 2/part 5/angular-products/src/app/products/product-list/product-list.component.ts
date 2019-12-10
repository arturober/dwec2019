import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private productsService: ProductsService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Angular Products | Product list');

    this.productsService.getProducts().subscribe(
      products => this.products = products,
      error => console.error(error),
      () => console.log('Products loaded')
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
