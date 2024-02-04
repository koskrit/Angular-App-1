import { authInfo } from './../core/state/auth';
import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { environment } from '../../environments/environment.development';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.urls.apiBaseUrl;
  authInfo = authInfo;

  constructor(private authService: OidcSecurityService) {}

  async get(path: string) {
    const { user, headers } = this.getRequestInfo();

    const raw = await this.apiFetch(this.baseUrl + path + `?User=${user}`, {
      headers,
    });
    const data = await raw.json();

    return data;
  }

  async post(path: string, body: {}) {
    const { user, headers } = this.getRequestInfo();

    const raw = await this.apiFetch(this.baseUrl + path + `?User=${user}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const data = await raw.json();

    return data;
  }

  async put(path: string, body: Note) {
    const Id = parseInt(path.split('/')[1]);
    const { user, headers } = this.getRequestInfo();

    const raw = await this.apiFetch(this.baseUrl + path + `?User=${user}`, {
      method: 'PUT',
      body: JSON.stringify({ ...body, Id }),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const data = await raw.text();

    return data;
  }

  async delete(path: string, id: number) {
    const { user, headers } = this.getRequestInfo();

    const raw = await this.apiFetch(
      this.baseUrl + path + `/${id}` + `?User=${user}`,
      {
        headers,
        method: 'DELETE',
      }
    );
    const data = await raw.text();

    return data;
  }

  async apiFetch(url: string, params?: RequestInit) {
    const raw = await fetch(url, params);
    if (raw.status === 401) {
      await this.authService.checkAuth().toPromise();
    }
    return raw;
  }

  getRequestInfo() {
    const user = this.authInfo()?.userData.name;
    const headers = {
      Authorization: `Bearer ${this.authInfo()?.accessToken}`,
    };

    return {
      user,
      headers,
    };
  }
}
