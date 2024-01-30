import { Component, Input } from '@angular/core';
import { Note } from '../../../../models/note';
import { strTruncate, timePassedSince } from '../../../../lib/utils/string';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css',
})
export class NoteItemComponent {
  @Input() note: Note | undefined;

  ngOnInit() {}

  getTitle() {
    return strTruncate(this.note?.title, 26);
  }

  getTimePassed() {
    return timePassedSince(this.note?.createdAt);
  }
}
