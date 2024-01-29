import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://localhost:5173/';

  constructor() {}

  async get(path: string) {
    const raw = await fetch(this.baseUrl + path, {});
    const data = await raw.json();

    return data;
  }

  async post(path: string, body: {}) {
    const raw = await fetch(this.baseUrl + path, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await raw.json();

    return data;
  }

  async put(path: string, body: {}) {
    const raw = await fetch(this.baseUrl + path, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await raw.json();

    return data;
  }

  async delete(path: string, id: number) {
    const raw = await fetch(this.baseUrl + path + `/${id}`, {
      method: 'DELETE',
    });
    const data = await raw.json();

    return data;
  }
}
