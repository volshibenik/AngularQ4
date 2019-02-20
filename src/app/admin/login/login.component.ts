import { Component, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  private subs: Subscription;
  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  logIn(login) {
    const token = Date.now();
    this.subs = this.authService.logIn(login, token).subscribe(user => {
      if (user && user.login) {
        this.router.navigate(['courses']);
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
