import { Component, Input } from '@angular/core';
import { Note } from '../../../models/note';
import { ApiService } from '../../../services/api.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-toolbar',
  templateUrl: './note-toolbar.component.html',
  styleUrl: './note-toolbar.component.css',
})
export class NoteToolbarComponent {
  @Input() note: Note | undefined;

  constructor(
    private api: ApiService,
    private toast: NotificationService,
    private router: Router
  ) {}

  async deleteNote() {
    this.toast.loader(true);
    try {
      const res = await this.api.delete(
        'notes',
        parseInt(this.note?.id as string)
      );

      this.toast.loader(false);

      this.toast.show(
        'Note  deleted',
        'Note was successfully Deleted Successfully',
        'success'
      );

      this.router.navigate(['/view']);
    } catch (err: any) {
      this.toast.loader(false);
      this.toast.show(
        "Note wasn't Deleted",
        'There was an issue while trying to delete your Note',
        'error'
      );
    }
  }
}
