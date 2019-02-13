import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthorizationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.isAuthenticated();

    const authReq = req.clone({ setHeaders: { Authorization: `${authToken}` } });
    return next.handle(authReq);
  }
}
