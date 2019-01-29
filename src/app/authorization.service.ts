import { Injectable } from '@angular/core';
import { USERS } from './users/users.mock';
import { UserModel } from './users/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private users: UserModel[] = USERS;
  private token;
  private currentUser;
  login(login, token) {
    const userFromDB = this.users.find(el => el.login === login);
    if (userFromDB) {
      this.currentUser = userFromDB;
      this.token = token;
      console.log('Logged!');
    }
  }

  logout() {
    this.token = null;
    this.currentUser = null;
  }

  isAuthenticated() {
    return !!(this.token && this.currentUser);
  }

  getUserInfo() {
    return this.currentUser;
  }
}
