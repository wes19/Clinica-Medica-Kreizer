import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent implements OnInit {
  especialidades:any=[];
  especialidadesTemporal: any = [];
  especialidadModal:any=[];
  
  constructor(private router: Router, private especialidadesService:EspecialidadesService) {}

  ngOnInit(): void {
    this.especialidadesService.obtenerEspecialidades().subscribe(
      res=>{
        this.especialidades = [];
        this.especialidadesTemporal = res;
        for(let i = 0; i < this.especialidadesTemporal.length; i++){
          if(this.especialidadesTemporal[i].estado == 'Activo'){
            this.especialidades.push(this.especialidadesTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
  }

  irDisponibilidad(idEsp: any) {
    this.router.navigate(['/citas/disponibilidad', idEsp]);
  }

}
