import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  LoginSuccess,
  LoginFailure,
  Login,
} from '../actions/login';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { AuthorizationService } from 'src/app/authorization.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => {
      console.log('ac', action);
      return action.payload.login;
    }),
    exhaustMap((auth: string) =>
      this.authService.logIn(auth, new Date()).pipe(
        map(user => {
          console.log('effect user', user);
          return new LoginSuccess(user);
        }),
        catchError(e => of(new LoginFailure(e))),
      ),
    ),
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/'])),
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginFailure),
    tap(() => console.log('redirected')),
    tap(() => this.router.navigate(['/login'])),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthorizationService,
    private router: Router,
  ) {}
}
