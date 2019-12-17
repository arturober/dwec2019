import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('productItem', [
      // transition(':enter', [
      //   style({ opacity: 0, transform: 'translateX(-100px)' }),
      //   animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      // ]),
      state('selected', style({ borderLeft: '40px lightgreen solid' })),
      transition('* => selected', animate('200ms ease-in')),
      transition('selected => *', animate('200ms ease-out')),
    ]),
    trigger('productList', [
      transition(':enter', [
        query('product-item', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(100, animate('500ms ease-out', style({ opacity: 1, transform: 'none' })))
        ])
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  title = "My product's list";
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
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Angular Products | Product list');

    this.productsService.getProducts().subscribe(
      products => (this.products = products),
      error => console.error(error),
      () => console.log('Products loaded')
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  toggleSelect(prod: IProduct) {
    prod.state = prod.state === 'selected' ? '' : 'selected';
  }
}
