import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registroEsp = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen : new FormControl(''),
    estado: new FormControl('', Validators.required),
  });

  constructor(private especialidadesService:EspecialidadesService) {}

  get obt(){
    return this.registroEsp.controls;
  }
  
  guardarEspecialidad(){
    const jsonEspecialidad = {
      nombre : this.registroEsp.controls['nombre'].value,
      imagen : this.registroEsp.controls['imagen'].value,
      estado : this.registroEsp.controls['estado'].value
    }
    this.especialidadesService.crearEspecialidad(jsonEspecialidad).subscribe(
      {
        next: res=>{
        console.log(res);
        this.registroEsp.reset();
        this.guardadoExitosamente();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  guardadoExitosamente(){
    Swal.fire({
      title: 'Guardado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000, 
    });
  }
}
