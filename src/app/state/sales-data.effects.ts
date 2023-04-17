// src/app/state/sales-data.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { SalesDataService } from '../api';
import * as SalesDataActions from './sales-data.actions';

@Injectable()
export class SalesDataEffects {
  constructor(private actions$: Actions, private salesDataService: SalesDataService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesDataActions.getUsers),
      exhaustMap(() =>
        from(this.salesDataService.salesDataGetUsersGet()).pipe(
          map((users) => SalesDataActions.getUsersSuccess({ users })),
          catchError((error) => of(SalesDataActions.getUsersFailure({ error })))
        )
      )
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesDataActions.getUser),
      exhaustMap((action) =>
        from(this.salesDataService.salesDataGetUserIdGet(action.id)).pipe(
          map((user) => SalesDataActions.getUserSuccess({ user })),
          catchError((error) => of(SalesDataActions.getUserFailure({ error })))
        )
      )
    )
  );

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesDataActions.getProducts),
      exhaustMap(() =>
        from(this.salesDataService.salesDataGetProductsGet()).pipe(
          map((products) => SalesDataActions.getProductsSuccess({ products })),
          catchError((error) => of(SalesDataActions.getProductsFailure({ error })))
        )
      )
    )
  );

  getSales$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesDataActions.getSales),
      exhaustMap(() =>
        from(this.salesDataService.salesDataGetSalesGet()).pipe(
          map((sales) => SalesDataActions.getSalesSuccess({ sales })),
          catchError((error) => of(SalesDataActions.getSalesFailure({ error })))
        )
      )
    )
  );
}
