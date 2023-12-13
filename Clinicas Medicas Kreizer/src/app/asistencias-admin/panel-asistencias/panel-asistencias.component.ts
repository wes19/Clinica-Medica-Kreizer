import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  asistenciaModal:any=[];

  constructor(private asistenciasService:AsistenciasService, private empleadosService:EmpleadosService, private modalService:NgbModal) {}

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
                  const entrada = new Date(asistencias.entrada).toLocaleString();
                  const salida = new Date(asistencias.salida).toLocaleString();
                  //const horasTrabajadas = this.calcularHorasTrabajadas(asistencias.entrada, asistencias.salida);
                  return {
                    ...asistencias,
                    nombreEmpleado: empleado ? `${empleado.nombre} ${empleado.apellidos}` : '',
                    entrada, salida, //horas_trabajadas: horasTrabajadas
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

  modalEditar(modal:any, asistencia:any){
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.asistenciaModal = asistencia

  }

  actualizarAsistencia(){
    const jsonAsistencia = {
      idAsi : this.asistenciaModal.idMenu,
      entrada : this.asistenciaModal.nombre,
      salida : this.asistenciaModal.imagen
    }
    this.asistenciasService.actualizarAsistencia(jsonAsistencia).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  private calcularHorasTrabajadas(entrada: string, salida: string): string {
    const fechaEntrada = new Date(entrada);
    const fechaSalida = new Date(salida);

    const diferenciaMs = fechaSalida.getTime() - fechaEntrada.getTime();

    const horas = Math.floor(diferenciaMs / 3600000); // 1 hora = 3600000 ms
    const minutos = Math.floor((diferenciaMs % 3600000) / 60000); // 1 minuto = 60000 ms

    return `${horas}h ${minutos}min`;
  }
}
