import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
  selectedOption: string | null = null;
  imagePath: string = '../assets/img/logoLetter.svg';

  constructor(private sidebarService: SidebarService) {}

  updateImage() {
    const isSidebarOpen = this.getSidebarState();
    if (isSidebarOpen) {
      this.imagePath = '../assets/img/logoLetter.svg';
    } else {
      this.imagePath = '../assets/img/logo.svg';
    }
  }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    this.updateImage();
  }

  getSidebarState() {
    return this.sidebarService.getSidebarState();
  }

  onOptionClick(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = '';
    } else {
      this.selectedOption = option; 
    }
  }
  
}
