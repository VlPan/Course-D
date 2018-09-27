
import { Product } from './../../models';
import { ProductAction } from '../actions';
import {
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
} from './../actions/products.action';

export interface ProductState {
  entities: { [id: number]: Product };
  productsStatus: ProductsStatus;
}

export enum ProductsStatus {
    INIT,
    LOADING,
    FAILED,
    SUCCESS
}

export const initialState: ProductState = {
  entities: {},
  productsStatus: ProductsStatus,
};

export function reducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        productsStatus: ProductsStatus.LOADING
      };
    }

    case LOAD_PRODUCTS_SUCCESS: {
      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: { [id: number]: Product }, pizza: Product) => {
          return {
            ...entities,
            [pizza.id]: pizza,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzas.UPDATE_PIZZA_SUCCESS:
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const { [pizza.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
