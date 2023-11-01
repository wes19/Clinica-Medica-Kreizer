import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {
  btnActivo: string = 'kamba';
  empleados:any=[];
  empleadosTemporal: any = [];

  constructor(private router: Router, private empleadosService:EmpleadosService) {}

  ngOnInit(): void {
    this.empleadosService.obtenerEmpleados().subscribe(
      res=>{
        this.empleados = [];
        this.empleadosTemporal = res;
        for(let i = 0; i < this.empleadosTemporal.length; i++){
          if(this.empleadosTemporal[i].estado == 'Activo'){
            this.empleados.push(this.empleadosTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
  }

  detailEmpleadosNavigate() {
    this.router.navigate(['/empleados/detalles'])
  }
}
