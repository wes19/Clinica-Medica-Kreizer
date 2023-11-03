import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isCollapse = false;

  toggleSidebar() {
    this.isCollapse = !this.isCollapse;
  }

  /*getSidebarState() {
    return this.isSidebarExpanded;
  }*/
}
