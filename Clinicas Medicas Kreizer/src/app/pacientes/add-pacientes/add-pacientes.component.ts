import { Component, ViewChild } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pacientes',
  templateUrl: './add-pacientes.component.html',
  styleUrls: ['./add-pacientes.component.scss']
})
export class AddPacientesComponent {
  @ViewChild('formularioPaciente') formularioPaciente?: NgForm;
  paciente: any = {};

  constructor(private pacientesService: PacientesService){}

  guardarEmpleado(){
    const jsonPaciente = {
      nombre: this.paciente.nombre,
      identidad: this.paciente.identidad,
      celular: this.paciente.celular,
      correo: this.paciente.correo,
      fecha_nacimiento: this.paciente.fecha_nacimiento,
      RTN: this.paciente.RTN,
      genero: this.paciente.genero,
      pais: this.paciente.pais,
      departamento: this.paciente.departamento,
      direccion: this.paciente.direccion
    }
    this.pacientesService.crearPaciente(jsonPaciente).subscribe(
      {
        next: res=>{
          console.log(res);
          if (this.formularioPaciente) {
            this.formularioPaciente.resetForm();
            this.guardadoExitosamente();
          }
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

