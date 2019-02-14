import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    this.authService.userEmitter.subscribe(user => {
      console.log('user', user);
      this.currentUser = user;
      this.authenticated = !!user;
    });
  }

  logIn() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
