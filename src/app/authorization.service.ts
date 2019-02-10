import { Injectable } from '@angular/core';
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
  pingHeader;
  // where do i store user and token, here or at server?

  constructor(private http: HttpClient) {}

  authenticate(user, token) {
    this.currentUser = user;
    this.token = token;
    this.pingHeader();
  }

  logIn(login, token): Observable<UserModel> {
    this.logout();
    return this.http.post<UserModel>(serverUrl, { login, token });
  }

  logout() {
    this.token = null;
    this.currentUser = null;
    // temp, while waitin for Observable
    this.pingHeader();
  }

  isAuthenticated() {
    return !!(this.token && this.currentUser);
  }

  getUserInfo() {
    return this.currentUser;
  }
}
