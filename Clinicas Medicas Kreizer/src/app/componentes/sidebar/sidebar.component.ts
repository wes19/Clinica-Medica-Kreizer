import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  selectedOption: string | null = null;
  imagePath: string = '../assets/img/logo.svg';
  isCitasRouteActive: boolean = false;
  isSalaMedicaRouteActive: boolean = false;
  citasUrls: string[] = [
    '/citas/crear-cita',
    '/citas/disponibilidad',
    '/contacto',
  ];
  salaMedicaUrls: string[] = [
    '/portal-medico/sala-medica',
    '/portal-medico/sala-espera',
    '/portal-medico/consulta-paciente',
  ];

  constructor(private sidebarService: SidebarService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isCitasRouteActive = this.citasUrls.some(url => this.router.url.includes(url));
      this.isSalaMedicaRouteActive = this.salaMedicaUrls.some(url => this.router.url.includes(url));
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
