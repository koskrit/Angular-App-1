import { Component, Input } from '@angular/core';
import { Note } from '../../../models/note';
import { ApiService } from '../../../services/api.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';
import { strTruncate } from '../../../lib/utils/string';

@Component({
  selector: 'app-note-toolbar',
  templateUrl: './note-toolbar.component.html',
  styleUrl: './note-toolbar.component.css',
})
export class NoteToolbarComponent {
  @Input() note: Note | undefined;
  @Input() isEditor: boolean = false;

  noteEditUrl: string | undefined;
  noteViewUrl: string | undefined;

  queryParams: any;

  constructor(
    private api: ApiService,
    private toast: NotificationService,
    private router: Router
  ) {}
  ngAfterContentChecked() {
    this.noteEditUrl = this.router.createUrlTree(['/editor']).toString();
    this.noteViewUrl = this.router
      .createUrlTree(['/note-viewer', this.note?.id])
      .toString();

    this.queryParams = { id: this.note?.id };
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

  truncate(str: string | undefined) {
    if (window.innerWidth < 1000 && window.innerWidth > 800)
      return strTruncate(str, 40);
    else if (window.innerWidth < 800 && window.innerWidth > 700)
      return strTruncate(str, 30);
    else if (window.innerWidth < 700 && window.innerWidth > 500)
      return strTruncate(str, 15);
    else if (window.innerWidth < 500) return strTruncate(str, 7);
    else return str;
  }
}
