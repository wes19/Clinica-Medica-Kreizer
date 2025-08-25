import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SesionesService } from 'src/app/services/sesiones.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-sala-medica',
  templateUrl: './add-sala-medica.component.html',
  styleUrls: ['./add-sala-medica.component.scss']
})
export class AddSalaMedicaComponent implements OnInit {

  medicos: any = [];
  especialidades: any = [];

  registroSesion = new FormGroup({
    idEmp: new FormControl('', Validators.required),
    idEsp: new FormControl('', Validators.required),
    estado: new FormControl(true, Validators.required)
  });

  constructor(private sesionesService: SesionesService, private empleadosService: EmpleadosService, private especialidadesService: EspecialidadesService) {}

  ngOnInit(): void {
    this.obtenerMedicos();
    this.obtenerEspecialidadesActivas();
  }

  get obt() {
    return this.registroSesion.controls;
  }

  obtenerMedicos() {
    this.empleadosService.obtenerEmpleadoMedico().subscribe({
      next: (res) => {
        this.medicos = res;
        console.log(this.medicos)
      },
      error: (err) => {
        console.error('Error al obtener médicos', err);
      }
    });
  }
  
  obtenerEspecialidadesActivas() {
    this.especialidadesService.obtenerEspecialidadesActivas().subscribe({
      next: (res) => {
        this.especialidades = res;
      },
      error: (err) => {
        console.error('Error al obtener especialidades activas', err);
      }
    });
  }
  
  guardarSesion() {
    if (this.registroSesion.valid) {
      this.sesionesService.crearSesion(this.registroSesion.value).subscribe({
        next: () => {
          this.registroSesion.reset();
          this.guardadoExitosamente();
        },
        error: (err) => console.error('Error al crear sesión', err)
      });
    } else {
      this.registroSesion.markAllAsTouched();
    }
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
