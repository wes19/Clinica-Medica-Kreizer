import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sala-medica',
  templateUrl: './list-sala-medica.component.html',
  styleUrls: ['./list-sala-medica.component.scss']
})
export class ListSalaMedicaComponent {
  btnActivo: string = 'kamba';

  constructor(private router: Router) {}

  navigateToSalaMedica() {
    this.router.navigate(['/sala-medica-admin/detalles']);
  }

}
