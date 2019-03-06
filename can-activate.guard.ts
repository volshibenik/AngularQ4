import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<State>
  ) { }
  canActivate(): Observable<boolean> {
    return this.store.select('auth', 'loggedIn').pipe(
      map(e => {
        if (e) {
          return true;
        }
        this.router.navigate(['login']);
      }),
    )
  }
}
