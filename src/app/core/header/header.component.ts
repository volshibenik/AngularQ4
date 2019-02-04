import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authenticated: boolean;
  currentUser;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.authService.pingHeader = this.authCall.bind(this);
  }
  authCall() {
    this.authenticated = this.authService.isAuthenticated();
    this.currentUser = this.authService.getUserInfo();
  }
  /*   ngOnChanges() {
    // wrong, observable waiting
    this.isAuth();
  } */
  logIn() {
    this.router.navigate(['login']);
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
