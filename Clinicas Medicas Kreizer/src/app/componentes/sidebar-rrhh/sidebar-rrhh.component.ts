import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-rrhh',
  templateUrl: './sidebar-rrhh.component.html',
  styleUrls: ['./sidebar-rrhh.component.scss']
})
export class SidebarRrhhComponent {
  selectedOption: string | null = null;
  isHovered: boolean = false;
  imagePath: string = '../assets/img/logo.svg';
  empleadosLista: boolean = false;
  empleadosArchivados: boolean = false;

  empListaUrls: string[] = [
    '/empleados/lista',
    '/empleados/detalles',
  ];

  empArchivedUrls: string[] = [
    '/empleados/archivados',
    '/empleados/empleado-archivado'
  ];

  constructor(private sidebarService: SidebarService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.empleadosLista = this.empListaUrls.some(url => this.router.url.includes(url));
      this.empleadosArchivados = this.empArchivedUrls.some(url => this.router.url.includes(url));
    });
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
