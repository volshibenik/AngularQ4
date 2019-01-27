import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthorizationService) {}

  ngOnInit() {}

  login(first, last) {
    console.log(first, last);

    const token = Date.now();
    this.authService.login({ first, last }, token);
  }
}
