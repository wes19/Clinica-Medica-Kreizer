import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.scss']
})
export class ExpedientesComponent {
  constructor(private router: Router) {}
  perfilNavigate() {
    this.router.navigate(['/portal-medico/perfil-paciente'])
  }

}
