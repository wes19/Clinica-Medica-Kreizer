import { Component } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent {
  empleado: any = {};

  constructor(private empleadosService: EmpleadosService){}

  guardarEmpleado(){
    const jsonEmpleado = {

    }
    this.empleadosService.crearEmpleado(jsonEmpleado).subscribe(
      {
        next: res=>{
          console.log(res)
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }
}
