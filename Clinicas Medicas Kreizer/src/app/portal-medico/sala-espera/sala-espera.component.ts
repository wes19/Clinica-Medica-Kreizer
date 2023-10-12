import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-espera',
  templateUrl: './sala-espera.component.html',
  styleUrls: ['./sala-espera.component.scss']
})
export class SalaEsperaComponent {
  constructor(private router: Router) {}

  btnActivo: string = 'list';

  consultaNavigate() {
    this.router.navigate(['/portal-medico/consulta-paciente'])
  }

}
