import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }

  register() {
    const callbackUrl = 'http://localhost:4200/register-callback';
    const params = new URLSearchParams(`redirectUrl=${callbackUrl}`);
    window.location.href =
      'https://localhost:4242/Account/Register?' + params.toString();
  }
}
