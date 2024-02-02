import { authInfo } from './../core/state/auth';
import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.urls.apiBaseUrl;
  authInfo = authInfo;

  constructor() {}

  async get(path: string) {
    const { user, headers } = this.getRequestInfo();

    const raw = await fetch(this.baseUrl + path + `?User=${user}`, { headers });
    const data = await raw.json();

    return data;
  }

  async post(path: string, body: {}) {
    const { user, headers } = this.getRequestInfo();

    const raw = await fetch(this.baseUrl + path + `?User=${user}`, {
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

    const raw = await fetch(this.baseUrl + path + `?User=${user}`, {
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

    const raw = await fetch(this.baseUrl + path + `/${id}` + `?User=${user}`, {
      headers,
      method: 'DELETE',
    });
    const data = await raw.text();

    return data;
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
