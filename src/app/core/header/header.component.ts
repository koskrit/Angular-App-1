import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  signedIn = true;
  showModal = false;
  showMobileMenu = false;

  constructor(private elementRef: ElementRef) {}

  getSignedInfo() {
    return this.signedIn;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showModal) {
      this.showModal = false;
    }
  }
}
