import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-medico',
  templateUrl: './pacientes-medico.component.html',
  styleUrls: ['./pacientes-medico.component.scss']
})
export class PacientesMedicoComponent {
  constructor(private router: Router) {}

  expedienteNavigate() {
    this.router.navigate(['/portal-medico/expedientes'])
  }

}
