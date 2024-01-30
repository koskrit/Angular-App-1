import { Component } from '@angular/core';
import { Note } from '../../models/note';
import { inputValidators, validateLength } from '../../lib/utils/validators';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  note: Note | undefined;

  constructor(
    private api: ApiService,
    private toast: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  htmlContent = '';
  title = '';
  showToolbar = false;
  isNoteEditMode = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '80vh',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    customClasses: [],
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    // uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [], //['bold', 'italic'], ['fontSize']
  };

  async ngOnInit() {
    const id = this.route.snapshot.queryParams['id'];
    if (id) {
      this.toast.loader(true);
      try {
        const data = (await this.api.get('notes/' + id)) as Note;
        this.note = data;
        this.toast.loader(false);
        this.loadContent();

        this.isNoteEditMode = true;
      } catch (err: any) {
        this.toast.loader(false);
        this.toast.show(
          "Couldn't Load Note",
          'There was an issue  loading the note!',
          'error'
        );
      }
    }
  }

  loadContent() {
    this.htmlContent = this.note?.htmlContent as string;
    this.title = this.note?.title as string;
    this.showToolbar = true;
  }

  validateInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    inputValidators.inputLength(target, 3, 100);
  }

  async createNote() {
    const titleValidated = validateLength(this.title.length, 3, 100);
    const contentValidated = validateLength(this.htmlContent.length, 3);

    if (!titleValidated || !contentValidated) {
      this.toast.show(
        'Validation Error',
        'Title must  be between 3 and 100 characters long. And content More that 3 characters',
        'error'
      );
      return;
    }

    const note: Note = {
      title: this.title,
      htmlContent: this.htmlContent,
    };

    try {
      this.toast.loader(true);
      const res = await this.api.post('Notes', note);
      this.toast.loader(false);
      this.toast.show(
        'Note Created',
        'Your new note has been created.',
        'success'
      );
      console.log(res);
      this.router.navigate(['/view']);
    } catch (err) {
      this.toast.loader(false);
      this.toast.show(
        "Note wasn't created!",
        'There was a problem creating your Note.',
        'error'
      );
    }
  }

  async saveNote() {
    debugger;
    const titleValidated = validateLength(this.title.length, 3, 100);
    const contentValidated = validateLength(this.htmlContent.length, 3);

    if (!titleValidated || !contentValidated) {
      this.toast.show(
        'Validation Error',
        'Title must  be between 3 and 100 characters long. And content More that 3 characters',
        'error'
      );
      return;
    }

    const note: Note = {
      title: this.title,
      htmlContent: this.htmlContent,
    };

    try {
      this.toast.loader(true);
      const res = await this.api.put('Notes/' + this.note?.id, note);
      this.toast.loader(false);
      this.toast.show('Note Saved', 'Your note has been Saved!.', 'success');
      console.log(res);
      this.router.navigate(['/note-viewer', this.note?.id]);
    } catch (err) {
      this.toast.loader(false);
      this.toast.show(
        "Note wasn't Saved!",
        'There was a problem Saving your Note.',
        'error'
      );
    }
  }
}
