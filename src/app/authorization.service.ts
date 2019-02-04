import { Injectable } from '@angular/core';
import { USERS } from './admin/users.mock';
import { UserModel } from './admin/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private users: UserModel[] = USERS;
  private token;
  private currentUser;
  pingHeader;
  login(login, token) {
    let success = false;
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
