import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from './admin/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const serverUrl = 'http://localhost:3200/login';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private token;
  private currentUser;
  userEmitter = new EventEmitter<UserModel>();

  constructor(private http: HttpClient) {}

  authenticate(user, token) {
    this.currentUser = user;
    this.token = token;
    this.userEmitter.emit(user);
  }

  logIn(login, token): Observable<UserModel> {
    this.logout();
    return this.http.post<UserModel>(serverUrl, { login, token });
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
