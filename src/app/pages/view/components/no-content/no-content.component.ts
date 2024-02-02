import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrl: './no-content.component.css',
})
export class NoContentComponent {
  constructor(private router: Router) {}

  goToEditor() {
    this.router.navigate(['editor']);
  }
}
