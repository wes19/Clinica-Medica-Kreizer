import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmbulanciasServices } from 'src/app/services/ambulancias.service';
import { AmbulanciaAdminService } from '../ambulancia-admin.service';

@Component({
  selector: 'app-list-ambulancias',
  templateUrl: './list-ambulancias.component.html',
  styleUrls: ['./list-ambulancias.component.scss']
})
export class ListAmbulanciasComponent implements OnInit {
  
  btnActivo: string = 'kamba';
  ambulancias: any=[];

  constructor(private router: Router, private ambulanciasService:AmbulanciasServices,  private ambulanciaAdminService: AmbulanciaAdminService) {}

  ngOnInit(): void {
    this.cargartabla();
  }

  detailAmbulanciaNavigate(ambulancia: any) {
    const ambulanciaSeleccionada = ambulancia;
    this.ambulanciaAdminService.setAmbulanciaSeleccionado(ambulanciaSeleccionada);
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
