import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-signin-callback',
  templateUrl: './signin-callback.component.html',
  styleUrl: './signin-callback.component.css',
})
export class SigninCallbackComponent {
  constructor(private toast: NotificationService) {
    this.toast.loader(true);
  }

  ngOnDestroy() {
    this.toast.loader(false);
  }
}
