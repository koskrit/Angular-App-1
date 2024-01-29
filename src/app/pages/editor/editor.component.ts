import { Component } from '@angular/core';
import { Note } from '../../models/note';
import { inputValidators, validateLength } from '../../lib/utils/validators';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  constructor(private api: ApiService) {}
  htmlContent = '';
  title = '';

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

  validateInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    inputValidators.inputLength(target, 3, 100);
  }

  async saveNote() {
    const validationPassed = validateLength(this.title.length, 3, 100);
    if (!validationPassed) {
      alert('Check your Title length');
      return;
    }

    const note: Note = {
      title: this.title,
      htmlContent: this.htmlContent,
    };

    const res = await this.api.post('Notes', note);

    console.log(res);
  }
}
