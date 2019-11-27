import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/i-product';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.productsService.getProduct(id).subscribe(
      product => this.product = product
    );
  }

  changeRating(rating: number) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.productsService.changeRating(this.product.id, rating).subscribe({
      error: error => this.product.rating = oldRating
    });
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  edit() {
    this.router.navigate(['/products', this.product.id, 'edit']);
  }

}
