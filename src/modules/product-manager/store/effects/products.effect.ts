
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as productActions from '../actions/products.action';
import { LoginService } from './../../../login/services/login.service';
import { ProductService } from './../../product-manager.service';


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.ofType(productActions.LOAD_PRODUCTS).pipe(
    switchMap(() => {
      return this.productService
        .getProducts()
        .pipe(
          map(products => new productActions.LoadProductsSuccess(products)),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        );
    })
  );

  @Effect()
  createPizza$ = this.actions$.ofType(productActions.CREATE_PRODUCT).pipe(
    map((action: productActions.CreateProduct) => action.payload),
    switchMap(product => {
      return this.productService
        .createProduct(product)
        .pipe(
          map(createdProduct => new productActions.CreateProductSuccess(createdProduct)),
          catchError(error => of(new productActions.CreateProductFail(error)))
        );
    })
  );

  // @Effect()
  // createPizzaSuccess$ = this.actions$
  //   .ofType(pizzaActions.CREATE_PIZZA_SUCCESS)
  //   .pipe(
  //     map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
  //     map(pizza => {
  //       return new fromRoot.Go({
  //         path: ['/products', pizza.id],
  //       });
  //     })
  //   );

  @Effect()
  updateProduct$ = this.actions$.ofType(productActions.UPDATE_PRODUCT).pipe(
    map((action: productActions.UpdateProduct) => action.payload),
    switchMap(product => {
      return this.productService
        .updateProduct(product)
        .pipe(
          map(updatedProduct => new productActions.UpdateProductSuccess(updatedProduct)),
          catchError(error => of(new productActions.UpdateProductFail(error)))
        );
    })
  );

  @Effect()
  removeProduct$ = this.actions$.ofType(productActions.REMOVE_PRODUCT).pipe(
    map((action: productActions.RemoveProduct) => action.payload),
    switchMap(product => {
      return this.productService
        .removeProduct(product)
        .pipe(
          map(removedProduct => new productActions.RemoveProductSuccess(removedProduct)),
          catchError(error => of(new productActions.RemoveProductFail(error)))
        );
    })
  );


  // @Effect()
  // handlePizzaSuccess$ = this.actions$
  //   .ofType(
  //     pizzaActions.UPDATE_PIZZA_SUCCESS,
  //     pizzaActions.REMOVE_PIZZA_SUCCESS
  //   )
  //   .pipe(
  //     map(pizza => {
  //       return new fromRoot.Go({
  //         path: ['/products'],
  //       });
  //     })
  //   );
}
