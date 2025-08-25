import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {
  departamentos:any=[];
  departamentoModal:any=[];

  registroDepartamento = new FormGroup({
    nombre: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  constructor(private departamentosService:DepartamentosService, private modalService:NgbModal){}

  ngOnInit(): void {
    this.cargartabla();
  }

  get obt(){
    return this.registroDepartamento.controls;
  }

  cargartabla() {
    this.departamentosService.obtenerDepartamentos().subscribe({
      next: (res) => {
        this.departamentos = res.reverse();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editarModal(modal: any, departamento: any){
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.departamentoModal = departamento;
  }

  guardarModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }

  guardarDepartamento() {
    this.departamentosService.crearDepartamento(this.registroDepartamento.value).subscribe({
      next: res => {
        console.log(res);
        this.modalService.dismissAll();
        this.registroDepartamento.reset();
        this.cargartabla();
      },
      error: err => {
        console.log(err);
      }
    });
  }  

  actualizarDepartamentos() {
    const jsonDepartamento = {
      idDep : this.departamentoModal.idDep,
      nombre : this.departamentoModal.nombre,
      estado : this.departamentoModal.estado
    }
    this.departamentosService.actualizarDepartamento(jsonDepartamento).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }
}
