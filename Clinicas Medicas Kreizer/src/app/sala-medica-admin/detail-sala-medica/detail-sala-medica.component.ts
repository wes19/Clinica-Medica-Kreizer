import { Component } from '@angular/core';
import { SalaMedicaAdminService } from '../sala-medica-admin.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { SesionesService } from 'src/app/services/sesiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-sala-medica',
  templateUrl: './detail-sala-medica.component.html',
  styleUrls: ['./detail-sala-medica.component.scss']
})
export class DetailSalaMedicaComponent {

  salaMedica : any = [];
  medicos : any = [];
  especialidades : any = [];

  constructor(private salaMedicaAdminService: SalaMedicaAdminService, private empleadosService: EmpleadosService, private especialidadesService: EspecialidadesService, 
    private sesionesService: SesionesService) {}


  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.salaMedicaAdminService.getSesionSeleccionada().subscribe((salaMedica) => {
      this.salaMedica = salaMedica;
      console.log(this.salaMedica)
      this.obtenerEspecialidadesActivas();
      this.obtenerMedicos();
    });
  }

  obtenerMedicos() {
    this.empleadosService.obtenerEmpleadoMedico().subscribe({
      next: (res) => {
        this.medicos = res;
        console.log('Médicos obtenidos:', this.medicos);
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
        console.log('Especialidades activas obtenidas:', this.especialidades);
      },
      error: (err) => {
        console.error('Error al obtener especialidades activas', err);
      }
    });
  }

  actualizarSesion(sesion: any){
    this.sesionesService.actualizarSesion(sesion).subscribe(
      {
        next: res => {
          console.log(res);
          this.editadoExitosamente();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  editadoExitosamente(){
    Swal.fire({
      title: 'Editado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000, 
    });
  }
}
