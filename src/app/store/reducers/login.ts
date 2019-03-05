import { UserModel } from 'src/app/admin/user.model';
import { AuthActionsUnion, AuthActionTypes } from '../actions/login';

export interface State {
  loggedIn: boolean;
  user: UserModel | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null,
};

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
