import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { PuestosLaboralesService } from 'src/app/services/puestosLaborales.service';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-archived-detalles',
  templateUrl: './archived-detalles.component.html',
  styleUrls: ['./archived-detalles.component.scss'],
  providers: [DatePipe]
})
export class ArchivedDetallesComponent implements OnInit {
  tabActiva: string = 'infoPersonal';
  empleado: any = [];
  puestos: any = [];

  constructor(private empleadosService: EmpleadosService, private employeeService: EmployeeService, 
  private puestosLaboralesService:PuestosLaboralesService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  desarchivar(){

  }

  cargarDatos() {
    this.employeeService.getEmpleadoSeleccionado().subscribe((empleado) => {
      this.empleado = empleado;
      this.puestosLaboralesService.obtenerPuestosLaborales().subscribe(
        {
          next: (puestos) => {
            this.puestos = puestos;
            const puesto = puestos.find((pue: any) => pue.idPue === this.empleado.idPue);
            const fecha_ingreso = this.datePipe.transform(this.empleado.fecha_ingreso, 'yyyy-MM-dd');
            const fecha_nacimiento = this.datePipe.transform(this.empleado.fecha_nacimiento, 'yyyy-MM-dd');
            this.empleado = {
              ...this.empleado,
              nombrePuestoLaboral: puesto ? puesto.nombre : '', fecha_ingreso, fecha_nacimiento
            };
          },
          error: err => {
            console.log(err);
          }
        }
      );
    });
  }
}
