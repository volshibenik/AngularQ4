import { ActionReducerMap } from '@ngrx/store';
import * as Login from './login';

export interface State {
  auth: Login.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: Login.reducer,
};
