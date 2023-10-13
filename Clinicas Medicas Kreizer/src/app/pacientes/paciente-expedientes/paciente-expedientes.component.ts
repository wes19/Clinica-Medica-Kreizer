import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-expedientes',
  templateUrl: './paciente-expedientes.component.html',
  styleUrls: ['./paciente-expedientes.component.scss']
})
export class PacienteExpedientesComponent {
  constructor(private router: Router) {}
  perfilNavigate() {
    this.router.navigate(['/pacientes/perfil'])
  }
}
