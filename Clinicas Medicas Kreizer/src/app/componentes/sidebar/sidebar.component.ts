import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  selectedOption: string | null = null;
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
