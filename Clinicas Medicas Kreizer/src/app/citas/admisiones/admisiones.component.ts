import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admisiones',
  templateUrl: './admisiones.component.html',
  styleUrls: ['./admisiones.component.scss']
})
export class AdmisionesComponent {
  constructor(private modalService:NgbModal) {
  }
  selectedOption = { name: 'Escoger opción', image: '../assets/img/icons/respuesta.png'};
  options = [
    { name: 'Medicina General', image: '../assets/img/especialidades/medicinaGeneral.png' },
    { name: 'Pediatría', image: '../assets/img/especialidades/pediatria.png' },
    { name: 'Neurología', image: '../assets/img/especialidades/neurologia.png' },
    { name: 'Dermatología', image: '../assets/img/especialidades/dermatologia.png' },
    { name: 'Otología', image: '../assets/img/especialidades/otologia.png' },
    { name: 'Oftalmología', image: '../assets/img/especialidades/oftalmologia.png' },
    { name: 'Rinología', image: '../assets/img/especialidades/rinologia.png' },
    { name: 'Dentista', image: '../assets/img/especialidades/dentista.png' },
    { name: 'Cardiología', image: '../assets/img/especialidades/cardiologia.png' },
    { name: 'Hepatología', image: '../assets/img/especialidades/hepatologia.png' },
    { name: 'Radiología', image: '../assets/img/especialidades/radiologia.png' },
    { name: 'Neumología', image: '../assets/img/especialidades/neumologia.png' },
    { name: 'Gastroenterología', image: '../assets/img/especialidades/gastroenterologia.png' },
    { name: 'Urología', image: '../assets/img/especialidades/urologia.png' },
    { name: 'Cirugía Plastica', image: '../assets/img/especialidades/cirugiaPlastica.png' },
    { name: 'Ortopedia', image: '../assets/img/especialidades/ortopedia.png' },
    { name: 'Ginecología', image: '../assets/img/especialidades/ginecologia.png' },
    { name: 'Hermatología', image: '../assets/img/especialidades/hermatologia.png' }
  ];

  openModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
      
    });
  }
}
