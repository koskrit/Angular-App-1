import { authInfo, isAuthenticated, userData } from './core/state/auth';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  EventTypes,
  OidcSecurityService,
  PublicEventsService,
} from 'angular-auth-oidc-client';

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
    private oidcSecurityService: OidcSecurityService,
    private eventService: PublicEventsService,
    private router: Router
  ) {
    this.eventService.registerForEvents().subscribe((event) => {
      if (event.type === EventTypes.UserDataChanged) {
        authInfo.set(event.value);
        isAuthenticated.set(event.value.isAuthenticated);
        userData.set(event.value.userData);
        console.log({ event }, 'userdatachanged');
        if (!event.value.isAuthenticated) {
          this.router.navigate(['/']);
        }
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

    this.addScrollToTop();
  }

  addScrollToTop() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
