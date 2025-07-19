import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HorariosService } from 'src/app/services/horarios.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss'],
  providers: [DatePipe]
})
export class HorariosComponent implements OnInit{
  diasSemana = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];
  horarioDia: any = null;
  horarios:any=[];
  especialidades:any=[];
  empleados:any=[];
  horarioModal:any=[];
  horasDia: string[] = [];

  registroHorario = new FormGroup({
    idEsp: new FormControl('', Validators.required),
    idEmp : new FormControl('', Validators.required),
    hora_inicio: new FormControl('', Validators.required),
    hora_final: new FormControl('', Validators.required),
    lun: new FormControl(''),
    mar: new FormControl(''),
    mie: new FormControl(''),
    jue: new FormControl(''),
    vie: new FormControl(''),
    sab: new FormControl(''),
    dom: new FormControl(''),
    estado: new FormControl('', Validators.required)
  });

  constructor(private modalService:NgbModal, private horariosService:HorariosService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.cargarTabla();
    this.horasDia = this.generarHoras();
  }
  
  get hor(){
    return this.registroHorario.controls;
  }

  cargarTabla(){
    this.horariosService.obtenerHorario().subscribe({
      next: (res) => {
        const [horarios, especialidades, empleados] = res;
        this.especialidades = especialidades.filter((e: { estado: string}) => e.estado === 'Activo');
        this.empleados = empleados
        this.horarios = horarios.map((horario: any) => {
          const especialidad = especialidades.find((esp: any) => esp.idEsp === horario.idEsp);
          const empleado = empleados.find((emp: any) => emp.idEmp === horario.idEmp);
          return {
            ...horario,
            especialidad: especialidad ? especialidad.nombre : '',
            empleado: empleado ? `${empleado.nombre} ${empleado.apellidos}` : '',

          };
        });
        this.horarios.reverse();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
   
  guardarModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }

  editarModal(modal: any, horario: any){
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.horarioModal = horario;
  }

  modalDelete(horario: any){
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
        this.horariosService.eliminarHorario(horario).subscribe(
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

  nombreDia(dia: string): string {
    return dia.charAt(0).toUpperCase() + dia.slice(1);
  }

  private generarHoras(): string[] {
    const horas: string[] = [];
    for (let i = 0; i < 24; i++) {
      const hora = i.toString().padStart(2, '0') + ':00';
      horas.push(hora);
    }
    return horas;
  }

  validarHoras(){
    const horaInicio = this.registroHorario.controls['hora_inicio'].value;
    const horaFinal = this.registroHorario.controls['hora_final'].value;
    if (horaInicio && horaFinal) {
      const horaInicioDate = new Date(`1970-01-01T${horaInicio}`);
      const horaFinalDate = new Date(`1970-01-01T${horaFinal}`);
      return horaInicioDate > horaFinalDate;
    }
    return false;
  }

  mostrarDias(modal: any, horario:any): void {
    this.modalService.open(modal, {
      size: 'l',
      centered: true,
    });
    this.horarioDia = horario;
  }

  actualizarHorario(horario: any){
    this.horariosService.actualizarHorario(horario).subscribe(
      {
        next: res=>{
          console.log(res)
          this.cargarTabla();
          this.modalService.dismissAll();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  guardarHorario(){
    if(this.validarHoras()){
      alert('Error: "Horario Fin" debe ser mayor que "Horario Inicio"');
      return;
    }

    const jsonHorario = {
      idEsp : this.registroHorario.controls['idEsp'].value,
      idEmp : this.registroHorario.controls['idEmp'].value,
      hora_inicio : this.registroHorario.controls['hora_inicio'].value,
      hora_final : this.registroHorario.controls['hora_final'].value,
      lun : this.registroHorario.controls['lun'].value || false,
      mar : this.registroHorario.controls['mar'].value || false,
      mie : this.registroHorario.controls['mie'].value || false,
      jue : this.registroHorario.controls['jue'].value || false,
      vie : this.registroHorario.controls['vie'].value || false,
      sab : this.registroHorario.controls['sab'].value || false,
      dom : this.registroHorario.controls['dom'].value || false,
      estado : this.registroHorario.controls['estado'].value
    }
    this.horariosService.crearHorario(jsonHorario).subscribe(
      {
        next: res=>{
        console.log(res);
        this.modalService.dismissAll();
        this.guardadoExitosamente();
        this.registroHorario.reset();
        this.cargarTabla();
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
