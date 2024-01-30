import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

type MessageType = 'success' | 'info' | 'warning' | 'question' | 'error';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  show(title: string, message: string, type: MessageType) {
    Swal.fire({ title: title, text: message, icon: type });
  }
}
