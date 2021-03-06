import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthActions, AuthActionTypes } from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  effect$ = this.actions$.ofType(AuthActionTypes.LoadAuths);

  constructor(private actions$: Actions) {}
}
