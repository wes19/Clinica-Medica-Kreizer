import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HorariosService } from 'src/app/services/horarios.service';
import { DatePipe } from '@angular/common';

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

  constructor(private modalService:NgbModal, private horariosService:HorariosService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.cargarTabla();
  }

  cargarTabla(){
    this.horariosService.obtenerHorario().subscribe({
      next: (res) => {
        const [horarios, especialidades, empleados] = res;
        this.especialidades = especialidades;
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

  nombreDia(dia: string): string {
    return dia.charAt(0).toUpperCase() + dia.slice(1);
  }

  mostrarDias(modal: any, horario:any): void {
    this.modalService.open(modal, {
      size: 'l',
      centered: true,
    });
    this.horarioDia = horario;
  }

  actualizarHorario(horario: any){
    console.log(horario)
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

}
