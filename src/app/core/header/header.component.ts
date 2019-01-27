import { Component, OnChanges } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  authenticated: boolean;
  constructor(private authService: AuthorizationService) {}
  ngOnChanges() {
    this.isAuth();
  }
  isAuth() {
    this.authenticated = this.authService.isAuthenticated();
  }
  logOut() {
    this.authService.logout();
  }
}
