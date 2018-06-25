import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router,private cookieService: CookieService) {}

  canActivate(): boolean {
    if (this.cookieService.get('userData') == '') {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
