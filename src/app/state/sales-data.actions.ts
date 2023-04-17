import { createAction, props } from '@ngrx/store';
import { User, Product, Sale } from '../api';

export const getUsers = createAction('[SalesData] Get Users');
export const getUsersSuccess = createAction('[SalesData] Get Users Success', props<{ users: User[] }>());
export const getUsersFailure = createAction('[SalesData] Get Users Failure', props<{ error: string }>());

export const getUser = createAction('[SalesData] Get User', props<{ id: number }>());
export const getUserSuccess = createAction('[SalesData] Get User Success', props<{ user: User }>());
export const getUserFailure = createAction('[SalesData] Get User Failure', props<{ error: string }>());

export const getProducts = createAction('[SalesData] Get Products');
export const getProductsSuccess = createAction('[SalesData] Get Products Success', props<{ products: Product[] }>());
export const getProductsFailure = createAction('[SalesData] Get Products Failure', props<{ error: string }>());

export const getSales = createAction('[SalesData] Get Sales');
export const getSalesSuccess = createAction('[SalesData] Get Sales Success', props<{ sales: Sale[] }>());
export const getSalesFailure = createAction('[SalesData] Get Sales Failure', props<{ error: string }>());
