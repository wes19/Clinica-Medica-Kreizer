import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admisiones-medico',
  templateUrl: './admisiones-medico.component.html',
  styleUrls: ['./admisiones-medico.component.scss']
})
export class AdmisionesMedicoComponent {
  constructor(private modalService:NgbModal) {
  }

  openModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }
}
