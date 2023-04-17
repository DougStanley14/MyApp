// src/app/state/sales-data.reducer.ts
import { createReducer, on, Action } from '@ngrx/store';
import { SalesDataState } from './sales-data.state';
import * as SalesDataActions from './sales-data.actions';

export const initialState: SalesDataState = {
  users: [],
  products: [],
  sales: [],
  loading: false,
  error: '',
};

export const salesDataReducer = createReducer(
  initialState,
  on(SalesDataActions.getUsers, SalesDataActions.getUser, SalesDataActions.getProducts, SalesDataActions.getSales, (state) => ({
    ...state,
    loading: true,
  })),
  on(SalesDataActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(SalesDataActions.getUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(SalesDataActions.getProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(SalesDataActions.getSalesSuccess, (state, { sales }) => ({
    ...state,
    sales,
    loading: false,
  })),
  on(SalesDataActions.getUsersFailure, SalesDataActions.getUserFailure, SalesDataActions.getProductsFailure, SalesDataActions.getSalesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function reducer(state: SalesDataState | undefined, action: Action) {
  return salesDataReducer(state, action);
}
``
