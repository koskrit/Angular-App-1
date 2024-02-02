import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment.development';

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
    const callbackUrl = environment.urls.registerCallback;
    const params = new URLSearchParams(`redirectUrl=${callbackUrl}`);
    window.location.href = `${environment.urls.register}?` + params.toString();
  }
}
