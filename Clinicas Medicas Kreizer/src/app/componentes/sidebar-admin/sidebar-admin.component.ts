import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent {
  selectedOption: string | null = null;
  imagePath: string = '../assets/img/logo.svg';
  pacientesListaAdmin: boolean = false;
  ambulanciasListaAdmin: boolean = false;
  salaMedicaListaAdmin: boolean = false;

  pacListaAdminUrls: string[] = [
    '/pacientes/lista',
    '/pacientes/paciente-expedientes',
    '/pacientes/perfil',
  ];
  ambListaAdminUrls: string[] = [
    '/ambulancias-admin/lista',
    '/ambulancias-admin/detalles',
  ];
  salaMedicaAdminUrls: string[] = [
    '/sala-medica-admin/lista',
    '/sala-medica-admin/detalles',
  ];

  constructor(private sidebarService: SidebarService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.pacientesListaAdmin = this.pacListaAdminUrls.some(url => this.router.url.includes(url));
      this.ambulanciasListaAdmin = this.ambListaAdminUrls.some(url => this.router.url.includes(url));
      this.salaMedicaListaAdmin = this.salaMedicaAdminUrls.some(url => this.router.url.includes(url));
    });
  }

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
