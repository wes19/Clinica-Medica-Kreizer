import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-rrhh',
  templateUrl: './sidebar-rrhh.component.html',
  styleUrls: ['./sidebar-rrhh.component.scss']
})
export class SidebarRrhhComponent {
  selectedOption: string | null = null;
  isHovered: boolean = false;
  imagePath: string = '../assets/img/logo.svg';

  constructor(private sidebarService: SidebarService) {
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  get isCollapsed() {
    return this.sidebarService.isCollapse;
  }

  onOptionClick(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = '';
    } else {
      this.selectedOption = option; 
    }
  }
}
