import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AmbulanciasServices } from 'src/app/services/ambulancias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ambulancias',
  templateUrl: './ambulancias.component.html',
  styleUrls: ['./ambulancias.component.scss']
})
export class AmbulanciasComponent {
  btnActivo: string = 'kamba';
  ambulancias: any=[];
  ambulanciaId: any=[];

  registroSalida = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    genero: new FormControl(''),
    celular_informante: new FormControl(''),
    estado_conciencia: new FormControl(''),
    tipo_emergencia: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    informacion_adicional: new FormControl('')
  }); 

  constructor(private modalService:NgbModal, private ambulanciasService:AmbulanciasServices) {
  }

  ngOnInit(): void {
    this.cargartabla();
  }

  get obj(){
    return this.registroSalida.controls;
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

  openModal(modal: any, ambulancia : number): void {
    this.ambulanciaId = ambulancia;
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
      
    });
  }

  showModal(){
      Swal.fire({
        title: '¡Apresúrate!',
        text: 'La ambulancia ha partido a su destino!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
  }

  guardarSalida(){
    const jsonSalida = {
      idAmb: this.ambulanciaId,
      nombre: this.registroSalida.controls['nombre'].value,
      edad: this.registroSalida.controls['edad'].value,
      genero: this.registroSalida.controls['genero'].value,
      celular_informante: this.registroSalida.controls['celular_informante'].value,
      estado_conciencia: this.registroSalida.controls['estado_conciencia'].value,
      tipo_emergencia: this.registroSalida.controls['tipo_emergencia'].value,
      ubicacion: this.registroSalida.controls['ubicacion'].value,
      informacion_adicional: this.registroSalida.controls['informacion_adicional'].value
    }
    console.log(jsonSalida)
    this.ambulanciasService.crearSalida(jsonSalida).subscribe(
      {
        next: res=>{
        console.log(res);
        this.modalService.dismissAll();
        this.guardadoExitosamente();
        this.registroSalida.reset();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  guardadoExitosamente(){
    Swal.fire({
      title: 'Guardado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000, 
    });
  }
  
}
