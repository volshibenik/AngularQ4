import { Injectable } from '@angular/core';
import { USERS } from './users/users.mock';
import { UserModel } from './users/user.model';
import { UsersModule } from './users/users.module';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private users: UserModel[] = USERS;
  private token;
  private currentUser;
  login(user, token) {
    const userFromDB = this.users.find(
      el => el.firstName === user.firstName && el.lastName === user.lastName,
    );
    if (userFromDB) {
      this.currentUser = userFromDB;
      this.token = token;
    }
  }

  logout() {
    this.token = null;
    this.currentUser = null;
  }

  isAuthenticated() {
    return this.token && this.currentUser;
  }
}
