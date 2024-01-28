import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-callback',
  templateUrl: './register-callback.component.html',
  styleUrl: './register-callback.component.css',
})
export class RegisterCallbackComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.login();
  }
}
