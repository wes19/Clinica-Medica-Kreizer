import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-especialidades',
  templateUrl: './list-especialidades.component.html',
  styleUrls: ['./list-especialidades.component.scss']
})
export class ListEspecialidadesComponent implements OnInit {
  especialidades:any=[];
  especialidadModal:any=[];

  constructor(private especialidadesService:EspecialidadesService, private modalService:NgbModal) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.especialidadesService.obtenerEspecialidades().subscribe(
      {
        next : res=>{
          this.especialidades = res.reverse();
        },
        error : err =>{
          console.log(err)
        }
      }
    );
  }

  modalEditar(modal: any, especialidad: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.especialidadModal = especialidad;
  }

  modalDelete(especialidad: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3e81e3',
      cancelButtonColor: '#D72E2E',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.especialidadesService.eliminarEspecialidad(especialidad).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: 'Información',
              text: res.message, // <-- mensaje del backend
              icon: 'success',
              customClass: { confirmButton: 'kz-button-blue' },
            });
            this.ngOnInit();
          },
          error: (err) => {
            Swal.fire({
              title: 'Error',
              text: err.error?.message || 'Error al eliminar el registro',
              icon: 'error',
              customClass: { confirmButton: 'kz-button-blue' },
            });
          }
        });
      }
    });
  }  

  actualizarEspecialidad()   {
    const jsonActualizarEsp = {
      idEsp : this.especialidadModal.idEsp,
      nombre : this.especialidadModal.nombre,
      imagen : this.especialidadModal.imagen,
      estado : this.especialidadModal.estado
    }
    this.especialidadesService.actualizarEspecialidad(jsonActualizarEsp).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  subirImagen(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.especialidadModal.imagen = `../assets/img/especialidades/${file.name}`;
      };
      reader.readAsDataURL(file);
    }
  }
  
}
