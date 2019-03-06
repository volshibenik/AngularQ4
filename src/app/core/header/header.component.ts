import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

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
    private store: Store<State>,
  ) {}

  ngOnInit() {
    /*    this.subs = this.authService.userEmitter.subscribe(user => {
         console.log('user', user);
         this.currentUser = user;
         this.authenticated = !!user;
       }); */

    this.subs = this.store.subscribe(s => {
      console.log('state', s);

      this.currentUser = s.auth.user;
      this.authenticated = !!this.currentUser;
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
