import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isSidebarExpanded = true;
  sidebarState: boolean = true;

  constructor(){
    this.checkWindowSize();
    window.addEventListener('resize', () => this.checkWindowSize());
  }

  sidebarStates() {
    this.sidebarState = !this.sidebarState;
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;

    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      if (this.isSidebarExpanded) {
        wrapper.classList.remove('collapsed');
      } else {
        wrapper.classList.add('collapsed');
      }
    }
  }

  getSidebarState() {
    return this.isSidebarExpanded;
  }

  private checkWindowSize() {
    this.isSidebarExpanded = window.innerWidth >= 992;
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.toggleSidebar()
  }
}
