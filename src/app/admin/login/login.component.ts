import { Component, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/spinner.service';

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
    private spinner: SpinnerService,
  ) {}

  logIn(login) {
    const token = Date.now();
    this.spinner.maybeActivate(true);
    this.subs = this.authService.logIn(login, token).subscribe(user => {
      this.spinner.maybeActivate(false);
      if (user && user.login) {
        this.authService.authenticate(user, token);
        this.router.navigate(['courses']);
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
