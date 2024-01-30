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

  noteUrl: string | undefined;

  constructor(
    private api: ApiService,
    private toast: NotificationService,
    private router: Router
  ) {}
  ngAfterContentChecked() {
    this.noteUrl = this.router
      .createUrlTree(['/editor', this.note?.id])
      .toString();
  }

  async deleteNote() {
    debugger;
    this.toast.loader(true);
    try {
      const res = await this.api.delete(
        'notes',
        parseInt(this.note?.id as string)
      );

      this.toast.loader(false);

      this.toast.show(
        'Note  deleted',
        'Note was Deleted Successfully',
        'success'
      );

      this.router.navigate(['/view']);
    } catch (err: any) {
      this.toast.loader(false);
      this.toast.show(
        'Problem Deleting Note',
        'There was an issue while trying to delete your Note',
        'error'
      );
    }
  }
}
