import { AuthService } from './../../services/auth.service';
import { isAuthenticated } from './../../core/state/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isAuthenticated = isAuthenticated;

  constructor(private AuthService: AuthService) {}

  register() {
    this.AuthService.login();
  }
}
