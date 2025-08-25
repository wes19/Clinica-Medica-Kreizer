import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionesService } from 'src/app/services/sesiones.service';
import { SalaMedicaAdminService } from '../sala-medica-admin.service';

@Component({
  selector: 'app-list-sala-medica',
  templateUrl: './list-sala-medica.component.html',
  styleUrls: ['./list-sala-medica.component.scss']
})
export class ListSalaMedicaComponent implements OnInit {
  btnActivo: string = 'kamba';
  sesiones: any = [];

  constructor(private router: Router, private sesionesService: SesionesService, private salaMedicaAdminService: SalaMedicaAdminService) {}

  ngOnInit(): void {
    this.obtenerSesiones();
  }

  navigateToSalaMedica(sesion : any) {
    const sesionSeleccionada = sesion;
    this.salaMedicaAdminService.setSesionSeleccionada(sesionSeleccionada);
    this.router.navigate(['/sala-medica-admin/detalles']);
  }

  obtenerSesiones() {
    this.sesionesService.obtenerSesiones().subscribe({
      next: (res) => {
        this.sesiones = res;
      },
      error: (err) => {
        console.error('Error al obtener sesiones', err);
      }
    });
  }
}
