import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { Events } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product;
  product$: Observable<Product>;

  constructor(private productService: ProductService, private route: ActivatedRoute, private events: Events) { 
    this.product$ = this.productService.getProduct(this.route.snapshot.params.id).pipe(share());
  }

  ngOnInit() {
    this.product$.subscribe(
      product => this.product = product
    );
  }

  getProduct(): Observable<Product> {
    return this.product ? of(this.product) : this.product$;
  }
}
