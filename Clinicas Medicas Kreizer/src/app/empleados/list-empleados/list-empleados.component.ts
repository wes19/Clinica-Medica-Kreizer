import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {
  btnActivo: string = 'kamba';
  empleados:any=[];
  empleadosTemporal: any = [];

  constructor(private router: Router, private empleadosService:EmpleadosService, private empleadoService: EmployeeService) {}

  ngOnInit(): void {
    this.empleadosService.obtenerEmpleados().subscribe(
      {
        next: res=> {
          this.empleados = [];
          this.empleadosTemporal = res;
          for(let i = 0; i < this.empleadosTemporal.length; i++){
            if(this.empleadosTemporal[i].estado == 'Inactivo'){
              this.empleados.push(this.empleadosTemporal[i]);
            }
          }
        },
        error: err =>{
          console.log(err);
        }
      }
    )
  }

  detailEmpleadosNavigate(empleado: any) {
    const empleadoSeleccionado = empleado;
    this.empleadoService.setEmpleadoSeleccionado(empleadoSeleccionado);
    this.router.navigate(['/empleados/detalles'])
  }
}
