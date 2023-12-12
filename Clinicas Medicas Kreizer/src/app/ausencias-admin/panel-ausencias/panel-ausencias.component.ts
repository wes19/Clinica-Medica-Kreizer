import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AusenciasService } from 'src/app/services/ausencias.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-panel-ausencias',
  templateUrl: './panel-ausencias.component.html',
  styleUrls: ['./panel-ausencias.component.scss']
})
export class PanelAusenciasComponent {
  ausencias:any=[];
  empleados:any=[];
  ausenciasActualizar:any=[];

  aprobadaSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  rechazadaSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private ausenciasService:AusenciasService, private empleadosService:EmpleadosService) {}

  ngOnInit(): void {
    this.ausenciasService.obtenerAusencias().subscribe(
      {
        next: (ausencias) => {
          this.ausencias = ausencias;
          this.empleadosService.obtenerEmpleados().subscribe(
            {
              next: (empleados) => {
                this.ausencias = this.ausencias.map((ausencias: any) => {
                  const empleado = empleados.find((emp: any) => emp.idEmp === ausencias.idEmp);
                  return {
                    ...ausencias,
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

  aprobarAusencia(ausencia: any): void {
    ausencia.aprobada = true;
    this.ausenciasActualizar = ausencia
    const jsonAusencia = {
      idAus : this.ausenciasActualizar.idAus,
      estado : 'Aprobado',
    }
    this.ausenciasService.actualizarAusencia(jsonAusencia).subscribe(
      {
        next: res=>{
          console.log(res);
        
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  rechazarAusencia(ausencia: any): void {
    ausencia.rechazada = true;
    this.ausenciasActualizar = ausencia
    const jsonAusencia = {
      idAus : this.ausenciasActualizar.idAus,
      estado : 'Rechazado',
    }
    this.ausenciasService.actualizarAusencia(jsonAusencia).subscribe(
      {
        next: res=>{
          console.log(res);
        
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }
  

}

