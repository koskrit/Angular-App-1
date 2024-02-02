import { CanActivateFn } from '@angular/router';
import { isAuthenticated } from '../core/state/auth';

export const authGuard: CanActivateFn = (route, state) => {
  return isAuthenticated();
};
