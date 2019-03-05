import { ActionReducerMap } from '@ngrx/store';
import * as Login from './login';
import { State } from './login';

export interface State {
  auth: Login.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: Login.reducer,
};
