import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PuestosLaboralesService } from 'src/app/services/puestosLaborales.service';

@Component({
  selector: 'app-puesto-laboral',
  templateUrl: './puesto-laboral.component.html',
  styleUrls: ['./puesto-laboral.component.scss']
})
export class PuestoLaboralComponent {
  puestos:any=[];
  puestoModal:any=[];

  registroPuesto = new FormGroup({
    departamento: new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  constructor(private departamentosService:PuestosLaboralesService, private modalService:NgbModal){}

  get obt(){
    return this.registroPuesto.controls;
  }

  modalEditar(modal: any){

  }

  guardarModal(modal: any){

  }

  guardarPuesto(){

  }

  actualizarPuesto(){
    
  }
}
