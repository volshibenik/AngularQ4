import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  login(login) {
    const token = Date.now();
    const success = this.authService.login(login, token);
    console.log('is Auth?', this.authService.isAuthenticated());
    success && this.router.navigate(['courses']);
  }
}
