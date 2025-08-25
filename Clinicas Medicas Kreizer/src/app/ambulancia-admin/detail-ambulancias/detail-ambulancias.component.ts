import { Component, OnInit } from '@angular/core';
import { AmbulanciaAdminService } from '../ambulancia-admin.service';
import { AmbulanciasServices } from 'src/app/services/ambulancias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-ambulancias',
  templateUrl: './detail-ambulancias.component.html',
  styleUrls: ['./detail-ambulancias.component.scss']
})
export class DetailAmbulanciasComponent implements OnInit {

  ambulancia : any = [];
  conductores: any=[];

  constructor(private ambulanciaAdminService: AmbulanciaAdminService, private ambulanciasService:AmbulanciasServices) {
  }

  ngOnInit(): void {
    this.cargarDatos();
    this.obtenerConductores();
  }

  cargarDatos() {
    this.ambulanciaAdminService.getAmbulanciaSeleccionado().subscribe((ambulancia) => {
      this.ambulancia = ambulancia;
    });
    console.log("Esta es la ambulancia: ", this.ambulancia)
  }

  obtenerConductores(){
    this.ambulanciasService.obtenerConductores().subscribe({
      next: (res) => {
        this.conductores = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  actualizarAmbulancia(ambulancia: any){
    this.ambulanciasService.actualizarAmbulancia(ambulancia).subscribe({
      next: (res) => {
        console.log(res);
        this.editadoExitosamente();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editadoExitosamente(){
    Swal.fire({
      title: 'Editado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000, 
    });
  }

  archivar(){
    const jsonAmbulancia = {
      idAmb: this.ambulancia.idAmb,
      estado : this.ambulancia.estado = 0
    }
    this.ambulanciasService.actualizarAmbulanciaEstado(jsonAmbulancia).subscribe(
      {
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  desarchivar(){
    const jsonAmbulancia = {
      idAmb: this.ambulancia.idAmb,
      estado : this.ambulancia.estado = 1
    }
    this.ambulanciasService.actualizarAmbulanciaEstado(jsonAmbulancia).subscribe(
      {
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
