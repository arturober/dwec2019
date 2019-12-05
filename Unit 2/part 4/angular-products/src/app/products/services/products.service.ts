import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ResponseProducts, ResponseProduct } from '../interfaces/responses';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<ResponseProducts>('products').pipe(
      map(resp => resp.products),
      catchError((resp: HttpErrorResponse) =>
        throwError(`Error getting
        products. Status: ${resp.status}. Message: ${resp.message}`)
      )
    );
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<ResponseProduct>('products/' + id).pipe(
      map(resp => resp.product),
      catchError((resp: HttpErrorResponse) =>
        throwError(`Error getting
        product ${id}. Status: ${resp.status}. Message: ${resp.message}`)
      )
    );
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.http
      .put<void>('products/' + idProduct + '/rating', { rating })
      .pipe(
        catchError((resp: HttpErrorResponse) =>
          throwError(
            `Error changing rating. Status: ${resp.status}. Message: ${resp.message}`
          )
        )
      );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<ResponseProduct>('products/' + product.id, product).pipe(
      map(response => response.product),
      catchError((response: Response) =>
        throwError(`Error updating product ${product.id}!`)
      )
    );
  }
}
