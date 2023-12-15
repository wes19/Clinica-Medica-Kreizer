import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PuestosLaboralesService } from 'src/app/services/puestosLaborales.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-puesto-laboral',
  templateUrl: './puesto-laboral.component.html',
  styleUrls: ['./puesto-laboral.component.scss']
})
export class PuestoLaboralComponent implements OnInit {
  puestos:any=[];
  departamentos:any=[];
  puestoModal:any=[];

  registroPuesto = new FormGroup({
    departamento: new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  constructor(private puestosLaboralesService:PuestosLaboralesService, private departamentosService:DepartamentosService, private modalService:NgbModal){}

  ngOnInit(): void {
    this.cargarTabla();
  }

  get obt(){
    return this.registroPuesto.controls;
  }

  cargarTabla() {
    this.puestosLaboralesService.obtenerPuestosLaborales().subscribe(
      {
       next: (puestos)=>{
         this.puestos = puestos;
         this.departamentosService.obtenerDepartamentos().subscribe(
          {
            next: (departamentos) => {
              this.departamentos = departamentos;
              this.puestos = this.puestos.map((puesto: any) => {
                const departamento = departamentos.find((dep: any) => dep.idDep === puesto.idDep);
                return {
                  ...puesto,
                  nombreDepartamento: departamento.nombre
                };
              });
              this.puestos = this.puestos.reverse();
            },
            error: err => {
              console.log(err);
            }
          }
         );
       },
       error: err =>{
         console.log(err);
       }
      }
    );
  }

  modalEditar(modal: any){

  }

  guardarModal(modal: any){
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }

  modalEliminar(modal: any){

  }

  guardarPuesto(){
    const jsonPuestoLaboral = {
      idDep : this.registroPuesto.controls['departamento'].value,
      nombre : this.registroPuesto.controls['nombre'].value,
      estado : this.registroPuesto.controls['estado'].value,
    }
    this.puestosLaboralesService.crearPuestoLaboral(jsonPuestoLaboral).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
          this.registroPuesto.reset();
          this.cargarTabla();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  actualizarPuesto(){
    
  }

}
