import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  imagePath: string = '../assets/img/logo.svg';
  
  constructor(private sidebarService: SidebarService) {}

  /*updateImage() {
    this.isSidebarExpanded = this.getSidebarState();
    if (this.isSidebarExpanded) {
      this.imagePath = '../assets/img/logo.svg';
    } else {
      this.imagePath = '../assets/img/logo.svg';
    }
  }*/

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
