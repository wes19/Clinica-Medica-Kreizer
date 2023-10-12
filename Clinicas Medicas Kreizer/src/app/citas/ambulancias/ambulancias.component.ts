import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ambulancias',
  templateUrl: './ambulancias.component.html',
  styleUrls: ['./ambulancias.component.scss']
})
export class AmbulanciasComponent {
  btnActivo: string = 'kamba';

  constructor(private modalService:NgbModal) {
  }

  openModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
      
    });
  }

  showModal(){
      Swal.fire({
        title: '¡Apresúrate!',
        text: 'La ambulancia ha partido a su destino!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }
  
}
