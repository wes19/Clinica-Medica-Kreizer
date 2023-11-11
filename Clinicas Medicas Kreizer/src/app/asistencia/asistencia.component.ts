import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent {
  isButtonChanged = false;

  marcarSalida() {
    this.isButtonChanged = !this.isButtonChanged;

    if (this.isButtonChanged) {
      Swal.fire({
        title: 'Bienvenido',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: 'Te Amo',
        icon: 'info',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  }
}
