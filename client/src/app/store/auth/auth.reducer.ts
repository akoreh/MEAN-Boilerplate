import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
  user: {
    _id: string;
    username: string;
    email: string;
  };
}

export const initialState: State = {
  user: {
    _id: null,
    username: null,
    email: null
  }
};

const selectAuthUser = (state: State) => state.user;

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.SetSessionFromStorage:
      return setSessionFromStorage(state);
    default:
      return state;
  }
}

function setSessionFromStorage(state: State): State {
  // TODO: Read from local storage and set session
  return {
    ...state
  };
}
