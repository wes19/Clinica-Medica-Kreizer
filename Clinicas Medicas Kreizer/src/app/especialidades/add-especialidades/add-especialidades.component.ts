import { Component  } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import Swal from 'sweetalert2';

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
    this.especialidadesService.crearEspecialidad(jsonEspecialidad).subscribe(
      {
        next: res=>{
        console.log(res);
        this.limpiarFormulario();
        this.guardadoExitosamente();
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

  guardadoExitosamente(){
    Swal.fire({
      title: 'Guardado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
    });
  }

}
