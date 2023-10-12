import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.scss']
})
export class ListPacientesComponent {
  constructor(private router: Router) {}

  expedienteNavigate() {
    this.router.navigate(['/pacientes/paciente-expedientes'])
  }

}
