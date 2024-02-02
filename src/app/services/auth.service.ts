import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment.development';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private toast: NotificationService
  ) {}

  login() {
    this.toast.loader(true);
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.toast.loader(true);
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }

  register() {
    this.toast.loader(true);
    const callbackUrl = environment.urls.registerCallback;
    const params = new URLSearchParams(`redirectUrl=${callbackUrl}`);
    window.location.href = `${environment.urls.register}?` + params.toString();
  }
}
