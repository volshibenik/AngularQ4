import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/store/actions/login';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private store: Store<State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new Login({ login: 'Sae' }));
  }
  submit(login: string) {
    this.store.dispatch(new Login({ login }));
  }

  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}
