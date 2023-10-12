import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-medica',
  templateUrl: './sala-medica.component.html',
  styleUrls: ['./sala-medica.component.scss']
})
export class SalaMedicaComponent {
  constructor(private router: Router) {}

  salaEsperaNavigate() {
    this.router.navigate(['/portal-medico/sala-espera'])
  }

}