import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ambulancias',
  templateUrl: './list-ambulancias.component.html',
  styleUrls: ['./list-ambulancias.component.scss']
})
export class ListAmbulanciasComponent {
  btnActivo: string = 'kamba';

  constructor(private router: Router) {}

  navigateToDetailAmbulancia() {
    this.router.navigate(['/ambulancias-admin/detalles']);
  }

}
