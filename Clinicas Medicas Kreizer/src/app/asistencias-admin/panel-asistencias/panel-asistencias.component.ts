import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-panel-asistencias',
  templateUrl: './panel-asistencias.component.html',
  styleUrls: ['./panel-asistencias.component.scss']
})
export class PanelAsistenciasComponent implements OnInit {
  asistencias:any=[];
  empleados:any=[];

  constructor(private asistenciasService:AsistenciasService, private empleadosService:EmpleadosService) {}

  ngOnInit(): void {
    this.asistenciasService.obtenerAsistencias().subscribe(
      {
        next: (asistencias) => {
          this.asistencias = asistencias;
          this.empleadosService.obtenerEmpleados().subscribe(
            {
              next: (empleados) => {
                this.asistencias = this.asistencias.map((asistencias: any) => {
                  const empleado = empleados.find((emp: any) => emp.idEmp === asistencias.idEmp);
                  return {
                    ...asistencias,
                    nombreEmpleado: empleado ? `${empleado.nombre} ${empleado.apellidos}` : '',
                  };
                });
              },
              error: err => {
                console.log(err);
              }
            }
          );
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}


