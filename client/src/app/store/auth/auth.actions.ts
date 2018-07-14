import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SetSessionFromStorage = '[Auth] Set Session From Storage'
}

export class SetSessionFromStorage implements Action {
  readonly type = AuthActionTypes.SetSessionFromStorage;
}

export type AuthActions = SetSessionFromStorage;
