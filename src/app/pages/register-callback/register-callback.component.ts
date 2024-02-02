import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-register-callback',
  templateUrl: './register-callback.component.html',
  styleUrl: './register-callback.component.css',
})
export class RegisterCallbackComponent {
  constructor(
    private authService: AuthService,
    private toast: NotificationService
  ) {
    this.toast.loader(true);
  }

  ngOnInit() {
    this.authService.login();
  }

  ngOnDestroy() {
    this.toast.loader(false);
  }
}
