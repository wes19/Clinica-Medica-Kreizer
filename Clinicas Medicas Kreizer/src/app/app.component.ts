import { Component } from '@angular/core';
import { Router } from '@angular/router';

const rutasSidebarAdmin = [
  '/administracion',
  '/ambulancias-admin',
  '/empleados',
  '/empleados/crear',
  '/empleados/detalles',
  '/empleados/lista',
  '/caja-admin',
  '/contabilidad',
  '/asistencias-admin',
  '/ausencias-admin',
  '/especialidades',
  '/sala-medica-admin',
  '/configuraciones',
  '/solicitudes',
  '/pacientes',
  '/pacientes/crear',
  '/pacientes/detalles',
  '/pacientes/lista',
  '/pacientes/paciente-expedientes',
  '/pacientes/perfil',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clinica-Medica';
  constructor(private router: Router){}

  PaginaPermitida(): boolean {
    const url = this.router.url;
    return url !=='/login' && url !== '/'
  }

  PaginaLanding(): boolean {
    const url = this.router.url;
    return url == '/'
  }

  PaginaLogin(): boolean {
    const url = this.router.url;
    return url == '/login'
  }

  SidebarAdmin(): boolean {
    const url = this.router.url;
    return rutasSidebarAdmin.includes(url);
  }
}

