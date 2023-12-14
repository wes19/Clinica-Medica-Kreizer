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
  errorFecha: string = '';
  
  constructor(private asistenciasService:AsistenciasService, private empleadosService:EmpleadosService, private modalService:NgbModal) {}

  ngOnInit(): void {
    this.asistenciasService.obtenerAsistencias().subscribe(
      {
        next: (asistencias) => {
          this.asistencias = asistencias;
          this.empleadosService.obtenerEmpleados().subscribe(
            {
              next: (empleados) => {
                this.asistencias = this.asistencias.map((asistencia: any) => {
                  const empleado = empleados.find((emp: any) => emp.idEmp === asistencia.idEmp);
                  const entrada = new Date(asistencia.entrada).toLocaleString();
                  const salida = new Date(asistencia.salida).toLocaleString();
                  //const horasTrabajadas = this.calcularHorasTrabajadas(asistencias.entrada, asistencias.salida);
                  return {
                    ...asistencia,
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

  modalEditar(modal:any, asistencia:any) {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.asistenciaModal = asistencia
  }

  actualizarAsistencia() {
    const fechaEntrada = this.convertirCadenaAFecha(this.asistenciaModal.entrada);
    const fechaSalida = this.convertirCadenaAFecha(this.asistenciaModal.salida);

    if (!fechaEntrada) {
      this.errorFecha = 'La hora de entrada esta vacia.';
      return
    } else if (!fechaSalida){
      this.errorFecha = 'La hora de salida esta vacia.';
      return
    } else if (fechaSalida < fechaEntrada) {
      this.errorFecha = 'La hora de salida no puede ser menor que la hora de entrada.';
      return;
    }
    
    this.errorFecha = '';
    const jsonAsistencia = {
      idAsi : this.asistenciaModal.idAsi,
      entrada: fechaEntrada,
      salida: fechaSalida
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
    )
  }

  convertirCadenaAFecha(cadena: string) {
    const partes = cadena.split(', ');
    if (partes.length === 2) {
      const fechaPartes = partes[0].split('/');
      const tiempoPartes = partes[1].split(':');
      
      if (fechaPartes.length === 3 && tiempoPartes.length === 3) {
        const año = parseInt(fechaPartes[2]);
        const mes = parseInt(fechaPartes[1]) - 1; // Los meses en JavaScript son de 0 a 11
        const dia = parseInt(fechaPartes[0]);
        const horas = parseInt(tiempoPartes[0]);
        const minutos = parseInt(tiempoPartes[1]);
        const segundos = parseInt(tiempoPartes[2]);
  
        return new Date(año, mes, dia, horas, minutos, segundos);
      }
    }
    return null;
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
