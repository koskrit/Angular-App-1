import { Component, Input } from '@angular/core';
import { Note } from '../../../../models/note';
import { strTruncate, timePassedSince } from '../../../../lib/utils/string';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css',
})
export class NoteItemComponent {
  @Input() note: Note | undefined;
  noteUrl: string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.noteUrl = this.router
      .createUrlTree(['/note-viewer', this.note?.id])
      .toString();
  }

  getTitle() {
    return strTruncate(this.note?.title, 26);
  }

  getTimePassed() {
    return timePassedSince(this.note?.createdAt);
  }
}
