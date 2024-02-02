import { authInfo, isAuthenticated, userData } from './core/state/auth';
import { Component } from '@angular/core';
import {
  EventTypes,
  OidcSecurityService,
  PublicEventsService,
} from 'angular-auth-oidc-client';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new-app';
  isAuthenticated = isAuthenticated;
  authInfo = authInfo;
  userData = userData;

  constructor(
    // Todo finish the state management and change statenwhen the signout happens
    private oidcSecurityService: OidcSecurityService,
    private eventService: PublicEventsService
  ) {
    this.eventService.registerForEvents().subscribe((event) => {
      if (event.type === EventTypes.UserDataChanged) {
        authInfo.set(event.value);
        isAuthenticated.set(event.value);
        userData.set(event.value.userData);
        console.log({ event }, 'userdatachanged');
      }
    });
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((AuthInfo) => {
      console.log(AuthInfo);
      isAuthenticated.set(AuthInfo.isAuthenticated);
      authInfo.set(AuthInfo);
      userData.set(AuthInfo.userData);
    });
  }
}
