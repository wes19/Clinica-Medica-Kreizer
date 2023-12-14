import { Component } from '@angular/core';
import { AusenciasService } from 'src/app/services/ausencias.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-panel-ausencias',
  templateUrl: './panel-ausencias.component.html',
  styleUrls: ['./panel-ausencias.component.scss']
})
export class PanelAusenciasComponent {
  ausencias: any[] = [];
  empleados: any[] = [];
  ausenciasActualizar: any[] = [];

  constructor(private ausenciasService: AusenciasService, private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.ausenciasService.obtenerAusencias().subscribe(
      {
        next: (ausencias) => {
          this.ausencias = ausencias;
          this.empleadosService.obtenerEmpleados().subscribe(
            {
              next: (empleados) => {
                this.ausencias = this.ausencias.map((ausencia: any) => {
                  const empleado = empleados.find((emp: any) => emp.idEmp === ausencia.idEmp);
                  const desde = new Date(ausencia.desde).toLocaleString();
                  const hasta = new Date(ausencia.hasta).toLocaleString();
                  return {
                    ...ausencia,
                    nombreEmpleado: empleado ? `${empleado.nombre} ${empleado.apellidos}` : '',
                    desde, hasta,
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

  aprobarAusencia(ausencia: any): void {
    ausencia.aprobada = true;
    this.actualizarEstado(ausencia.idAus, 'Aprobado');
  }

  rechazarAusencia(ausencia: any): void {
    ausencia.rechazada = true;
    this.actualizarEstado(ausencia.idAus, 'Rechazado');
  }

  actualizarEstado(idAus: number, estado: string): void {
    const jsonAusencia = {
      idAus: idAus,
      estado: estado,
    };
    this.ausenciasService.actualizarAusencia(jsonAusencia).subscribe(
      {
        next: res => {
          console.log(res);
          const ausenciaActualizada = this.ausencias.find(ausencia => ausencia.idAus === idAus);
          if (ausenciaActualizada) {
            ausenciaActualizada.estado = estado;
          }
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
