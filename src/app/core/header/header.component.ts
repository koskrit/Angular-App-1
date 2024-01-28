import { Component, HostListener, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  signedIn = false;
  showModal = false;
  showMobileMenu = false;

  authService: AuthService;

  constructor(private elementRef: ElementRef, authService: AuthService) {
    this.authService = authService;
  }

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
