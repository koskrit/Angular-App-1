import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrl: './note-viewer.component.css',
})
export class NoteViewerComponent {
  note: Note | undefined;
  id: string | undefined;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const note = (await this.api.get('notes/' + id)) as Note;
    this.note = note;
  }
}
