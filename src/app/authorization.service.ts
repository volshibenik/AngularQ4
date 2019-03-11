import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from './admin/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

const serverUrl = 'http://localhost:3200/login';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private token;
  private currentUser;
  userEmitter = new EventEmitter<UserModel>();

  constructor(private http: HttpClient, private spinner: SpinnerService) {}

  logIn(login, token): Observable<UserModel> {
    this.logout();
    /*  this.spinner.maybeActivate(true); */
    return this.http.post<UserModel>(serverUrl, {
      login,
      token,
    }); /* .pipe(
      switchMap(user => {
        console.log('service after backend', user);
        return of(user);
      }),
      catchError(e => {
        this.userEmitter.emit(e);
        this.spinner.maybeActivate(false);
        console.log('tap');
        return of(e)
      }),
    ); */
  }

  logout() {
    this.token = null;
    this.currentUser = null;
    this.userEmitter.emit(null);
  }

  isAuthenticated() {
    return new Observable<boolean>(obr => {
      obr.next(!!(this.token && this.currentUser));
      return {
        unsubscribe() {},
      };
    });
  }

  getUserInfo() {
    return this.currentUser;
  }
}
