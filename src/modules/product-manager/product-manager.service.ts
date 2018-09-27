import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Product } from './models';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`http://localhost:3000/products`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createProduct(payload: Product): Observable<Product> {
    return this.http
      .post<Product>(`http://localhost:3000/products`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateProduct(payload: Product): Observable<Product> {
    return this.http
      .put<Product>(`http://localhost:3000/products/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeProduct(payload: Product): Observable<Product> {
    return this.http
      .delete<Product>(`http://localhost:3000/products/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
