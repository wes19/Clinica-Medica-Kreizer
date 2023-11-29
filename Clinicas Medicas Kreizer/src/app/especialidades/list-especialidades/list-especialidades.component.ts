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
      res=>{
        this.especialidades = [];
        this.especialidadesTemporal = res;
        for(let i = 0; i < this.especialidadesTemporal.length; i++){
          if(this.especialidadesTemporal[i].estado == 'Activo'){
            this.especialidades.push(this.especialidadesTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
  }

  openModal(modal: any, especialidad: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.especialidadModal = especialidad;
  }
  
}
