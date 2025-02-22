import { Component, ElementRef, HostListener } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDropdownOpen = false;
  isDropdownNoti = false;

  constructor(private sidebarService: SidebarService, private el: ElementRef) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleDropdownNoti() {
    this.isDropdownNoti = !this.isDropdownNoti;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isDropdownOpen = false;
      this.isDropdownNoti = false;
    }
  }
}
