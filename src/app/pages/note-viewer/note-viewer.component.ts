import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Note } from '../../models/note';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrl: './note-viewer.component.css',
})
export class NoteViewerComponent {
  note: Note | undefined;
  id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toast: NotificationService
  ) {}

  async ngOnInit() {
    this.toast.loader(true);
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const note = (await this.api.get('notes/' + id)) as Note;
      this.note = note;

      this.toast.loader(false);
    } catch (err: any) {
      this.toast.loader(false);
      this.toast.show(
        "Note couldn't be loaded",
        'There was an Issue while loading your Note',
        'error'
      );
    }
  }
}
