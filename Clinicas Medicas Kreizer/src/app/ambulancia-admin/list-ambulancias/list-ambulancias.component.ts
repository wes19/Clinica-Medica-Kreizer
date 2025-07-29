import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmbulanciasServices } from 'src/app/services/ambulancias.service';

@Component({
  selector: 'app-list-ambulancias',
  templateUrl: './list-ambulancias.component.html',
  styleUrls: ['./list-ambulancias.component.scss']
})
export class ListAmbulanciasComponent {
  
  btnActivo: string = 'kamba';
  ambulancias: any=[];

  constructor(private router: Router, private ambulanciasService:AmbulanciasServices) {}

  navigateToDetailAmbulancia() {
    this.router.navigate(['/ambulancias-admin/detalles']);
  }

  cargartabla() {
    this.ambulanciasService.obtenerAmbulancias().subscribe({
      next: (res) => {
        this.ambulancias = res.reverse();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
