import { Injectable } from '@angular/core';
import { USERS } from './admin/users.mock';
import { UserModel } from './admin/user.model';
import { HttpClient } from '@angular/common/http';

const serverUrl = 'http://localhost:3200/login';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private users: UserModel[] = USERS;
  private token;
  private currentUser;
  pingHeader;

  constructor(private http: HttpClient) { }
  login(login, token) {
    let success = false;
    this.http.post(serverUrl, token);
    const userFromDB = this.users.find(el => el.login === login);
    if (userFromDB) {
      this.currentUser = userFromDB;
      this.token = token;
      console.log('Logged!');
      success = true;
    }
    // temp, while waitin for Observable
    this.pingHeader();

    return success;
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
