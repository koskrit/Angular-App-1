import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  notes: Note[] = [];
  isLoading = true;

  constructor(private api: ApiService, private toast: NotificationService) {}

  async ngOnInit() {
    this.toast.loader(true);

    try {
      const data = (await this.api.get('notes')) as Note[];
      data.sort((a: any, b: any) => a.id - b.id).reverse();

      this.notes = data;
      this.toast.loader(false);
      this.isLoading = false;
    } catch (err: any) {
      this.toast.loader(false);
      this.isLoading = false;

      this.toast.show(
        "Notes couldn't be loaded",
        'There was an Issue while loading your Notes',
        'error'
      );
    }
  }
}
