import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  authenticated: boolean;
  currentUser;
  subs: Subscription;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.subs = this.authService.userEmitter.subscribe(user => {
      console.log('user', user);
      this.currentUser = user;
      this.authenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  logIn() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
