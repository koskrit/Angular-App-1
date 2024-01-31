import { LoginResponse } from 'angular-auth-oidc-client';
import { AuthInfo } from './auth.d';
import { signal } from '@angular/core';

export const isAuthenticated = signal(false);

export const authInfo = signal<LoginResponse | undefined>(undefined);
