import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-puesto-laboral',
  templateUrl: './puesto-laboral.component.html',
  styleUrls: ['./puesto-laboral.component.scss']
})
export class PuestoLaboralComponent {
  puestos:any=[];

  registroPuesto = new FormGroup({
    departamento: new FormControl('', Validators.required),
    puesto : new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  get obt(){
    return this.registroPuesto.controls;
  }

  modalEditar(modal: any){

  }

  guardarPuesto(){

  }
}
