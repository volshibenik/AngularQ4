import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthorizationService) {}

  login(login) {
    const token = Date.now();
    this.authService.login(login, token);
    console.log('is Auth?', this.authService.isAuthenticated());
  }
}
