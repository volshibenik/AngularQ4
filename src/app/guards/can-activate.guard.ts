import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../authorization.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}
  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map(e => {
        if (e) {
          return true;
        }
        this.router.navigate(['login']);
      }),
    );
  }
}
