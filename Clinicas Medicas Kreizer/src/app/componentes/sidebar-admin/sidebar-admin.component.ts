import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent {
  selectedOption: string | null = null;
  isHovered: boolean = false;

  constructor(private sidebarService: SidebarService) {
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  /*getSidebarState() {
    return this.sidebarService.getSidebarState();
  }*/

  onOptionClick(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = '';
    } else {
      this.selectedOption = option; 
    }
  }
}
