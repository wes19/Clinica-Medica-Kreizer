import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent {

  constructor(private router: Router) {}

  navigateToDisponibilidad() {
    this.router.navigate(['/citas/disponibilidad']);
  }

}
