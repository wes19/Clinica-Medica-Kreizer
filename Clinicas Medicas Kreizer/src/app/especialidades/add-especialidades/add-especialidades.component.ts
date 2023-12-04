import { Component  } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-add-especialidades',
  templateUrl: './add-especialidades.component.html',
  styleUrls: ['./add-especialidades.component.scss']
})
export class AddEspecialidadesComponent{
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

     // tslint:disable-next-line: deprecation
    this.especialidadesService.crearEspecialidad(jsonEspecialidad).subscribe(
      {
        next: res=>{
        console.log(res);
        this.limpiarFormulario();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  limpiarFormulario() {
    this.nombre = '';
    this.estado = '';
    this.imagen = '';
  }

}
