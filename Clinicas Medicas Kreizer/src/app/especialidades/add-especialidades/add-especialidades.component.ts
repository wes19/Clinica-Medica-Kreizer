import { Component } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-add-especialidades',
  templateUrl: './add-especialidades.component.html',
  styleUrls: ['./add-especialidades.component.scss']
})
export class AddEspecialidadesComponent {
  especialidades:any=[];
  especialidadesTemporal: any = [];
  especialidadModal:any=[];

  //Variables NGMODEL
  nombre : string = '';
  imagen : string = '';
  estado : string = '';

  constructor(private especialidadesService:EspecialidadesService) {}

  guardarEspecialidad(){
    const jsonEspecialidad = {
      nombre : this.nombre,
      imagen : this.imagen,
      estado : this.estado
    }
    console.log(jsonEspecialidad);

    this.especialidadesService.crearEspecialidad(jsonEspecialidad).subscribe(
      res=>{
        console.log(res);
        this.limpiarFormulario();
        console.log('jsonEspecialidad:', jsonEspecialidad);
      },
      error=>{
        console.log(error);
      }
    );
  }

  limpiarFormulario() {
    this.nombre = '';
    this.estado = '';
    this.imagen = '';
    console.log(this.nombre)
  }

}
