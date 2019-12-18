import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IProduct } from '../interfaces/i-product';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolve implements Resolve<IProduct> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productsService.getProduct(+route.params.id).pipe(
      catchError(e => {
        this.router.navigate(['/products']);
        return of(null);
      })
    );
  }
}
