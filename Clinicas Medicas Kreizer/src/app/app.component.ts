import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './componentes/sidebar/sidebar.service';

const rutasSidebarAdmin = [
  '/administracion',
  '/ambulancias-admin',
  '/ambulancias-admin/crear',
  '/ambulancias-admin/lista',
  '/ambulancias-admin/detalles',
  '/sala-medica-admin',
  '/sala-medica-admin/crear',
  '/sala-medica-admin/lista',
  '/sala-medica-admin/detalles',
  '/caja-admin',
  '/especialidades',
  '/especialidades/crear',
  '/especialidades/lista',
  '/especialidades/detalles',
  '/configuraciones',
  '/configuraciones/inicio',
  '/configuraciones/puestos-laborales',
  '/configuraciones/departamentos',
  '/configuraciones/horarios',
  '/pacientes',
  '/pacientes/crear',
  '/pacientes/detalles',
  '/pacientes/lista',
  '/pacientes/paciente-expedientes',
  '/pacientes/perfil',
];

const rutasSidebarRRHH = [
  '/rrhh',
  '/empleados',
  '/empleados/crear',
  '/empleados/detalles',
  '/empleados/lista',
  '/empleados/archivados',
  '/asistencias-admin',
  '/asistencias-admin/panel',
  '/ausencias-admin',
  '/ausencias-admin/panel',
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clinica-Medica';
  constructor(private router: Router, private sidebarService: SidebarService){}

  get isCollapsed() {
    return this.sidebarService.isCollapse;
  }

  PaginaPermitida(): boolean {
    const url = this.router.url;
    return url !== '/'
  }

  PaginaLogin(): boolean {
    const url = this.router.url;
    return url == '/'
  }

  SidebarAdmin(): boolean {
    const url = this.router.url;
    return rutasSidebarAdmin.includes(url);
  }

  SidebarRRHH(): boolean {
    const url = this.router.url;
    return rutasSidebarRRHH.includes(url);
  }
}

