import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PacientesService } from 'src/app/services/pacientes.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.scss'],
  providers: [DatePipe]
})
export class ListPacientesComponent implements OnInit {
  pacientes:any=[];
  pacienteModal:any=[];

  constructor(private router: Router, private pacientesService:PacientesService, private modalService:NgbModal, private datePipe: DatePipe) {}
  
  ngOnInit(): void {
    this.cargarTabla();
  }

  cargarTabla() {
    this.pacientesService.obtenerPaciente().subscribe({
      next: (res) => {
        this.pacientes = res.reverse().map((paciente : any) => ({
          ...paciente,
          fecha_nacimiento: this.datePipe.transform(paciente.fecha_nacimiento, 'yyyy-MM-dd')
        }));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editarModal(modal: any, paciente: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.pacienteModal = paciente;
  }

  actualizarPaciente() {
    const jsonActualizarPaciente = {
      idPac : this.pacienteModal.idPac,
      nombre : this.pacienteModal.nombre,
      identidad : this.pacienteModal.identidad,
      celular : this. pacienteModal.celular,
      correo : this.pacienteModal.correo,
      fecha_nacimiento : this.pacienteModal.fecha_nacimiento,
      RTN : this.pacienteModal.RTN,
      genero : this.pacienteModal.genero,
      pais : this.pacienteModal.pais,
      departamento : this.pacienteModal.departamento,
    }
    this.pacientesService.actualizarPaciente(jsonActualizarPaciente).subscribe(
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

  modalDelete(paciente: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3e81e3',
      cancelButtonColor: '#D72E2E',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.eliminarPaciente(paciente).subscribe(
          {
            next: res=>{
              console.log(res)
              this.cargarTabla();
            },
            error: err =>{
              console.log(err);
            }
          }
        )
        Swal.fire({
          title: 'Eliminado',
          text: 'El registro ha sido eliminado',
          icon: 'success',
          customClass: {confirmButton: 'kz-button-blue'},
        });
      }
    });
  }

  expedienteNavigate() {
    this.router.navigate(['/pacientes/paciente-expedientes'])
  }

}
