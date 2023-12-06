import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-list-especialidades',
  templateUrl: './list-especialidades.component.html',
  styleUrls: ['./list-especialidades.component.scss']
})
export class ListEspecialidadesComponent implements OnInit {
  especialidades:any=[];
  especialidadesTemporal: any = [];
  especialidadModal:any=[];

  constructor(private especialidadesService:EspecialidadesService, private modalService:NgbModal) {}

  ngOnInit(): void {
    this.especialidadesService.obtenerEspecialidades().subscribe(
      {
        next : res=>{
          this.especialidades = [];
          this.especialidadesTemporal = res;
          for(let i = 0; i < this.especialidadesTemporal.length; i++){
            if(this.especialidadesTemporal[i].estado == 'Activo'){
              this.especialidades.push(this.especialidadesTemporal[i]);
            }
          }
        },
        error : err =>{
          console.log(err)
        }
      }
    );
  }

  openModal(modal: any, especialidad: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.especialidadModal = especialidad;
  }

  actualizarEspecialidad() {
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
  
}
