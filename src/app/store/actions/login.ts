import { Action } from '@ngrx/store';
import { UserModel, LoginModel } from 'src/app/admin/user.model';

export enum AuthActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Login Page] Login Success',
  LoginFailure = '[Login Page] Login Failure',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: LoginModel) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: UserModel) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: { error: any }) {}
}

export type AuthActionsUnion = Login | LoginSuccess | LoginFailure;
