import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval, getDay, isSameDay } from 'date-fns';
import { HorariosService } from 'src/app/services/horarios.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.scss']
})

export class DisponibilidadComponent {
  @ViewChild('formularioPaciente') formularioPaciente?: NgForm;
  currentMonth: Date;
  calendarDays: Date[] = [];
  selectedDay: Date | null = null;
  weekDays: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  verFormulario: boolean = false;
  agregadoExitosamente: boolean = false;
  horarios:any=[];
  especialidades:any=[];
  empleados:any=[];
  paciente: any = {};

  registroPac = new FormGroup({
    nombre: new FormGroup('', Validators.required),
    identidad: new FormGroup('', Validators.required),
    celular: new FormGroup('', Validators.required),
    correo: new FormGroup('', Validators.required),
    fecha_nacimiento: new FormGroup('', Validators.required),
    //nombre: new FormGroup('', Validators.required),
    //nombre: new FormGroup('', Validators.required)
  })

  constructor(private modalService:NgbModal, private horariosService:HorariosService, private route: ActivatedRoute, private pacientesService:PacientesService) {
    this.currentMonth = new Date();
    this.generateCalendar();
    this.selectCurrentDay();
    this.route.params.subscribe(params => {
      const idEsp = params['idEsp'];
      this.cargarHorarios(idEsp);
    });
  }

  generateCalendar(): void {
    const startDate = startOfMonth(this.currentMonth); //Primer día del mes
    const endDate = addMonths(startDate, 1); //Primer dia del mes siguiente
    const allDays = eachDayOfInterval({ start: startDate, end: endDate }); //Todos los dias del mes + el primer dia del mes siguiente
    const startWeekDay = getDay(startDate); // Día de la semana del primer día del mes
    const emptyDays = new Array(startWeekDay).fill(null); //Arreglo con el dia de la semana del primer dia del mes

    this.calendarDays = allDays.filter(day => {
      return format(day, 'MM') === format(this.currentMonth, 'MM');
    });
    this.calendarDays = emptyDays.concat(this.calendarDays);
  }

  selectCurrentDay(): void {
    const currentDate = new Date();
    const selectedDay = this.calendarDays.find((day) => isSameDay(day, currentDate));
    this.selectedDay = selectedDay || null;
  }

  isSelected(day: Date): boolean {
    return this.selectedDay == day;
  }
  
  //Retrocede los meses en el calendario
  previousMonth(): void {
    this.currentMonth = subMonths(this.currentMonth, 1);
    this.generateCalendar();
  }

  //Avanza los meses en el calendario
  nextMonth(): void {
    this.currentMonth = addMonths(this.currentMonth, 1);
    this.generateCalendar();
  }

  openDay(day: any){
    this.selectedDay = day;
  }

  closeDay(): void {
    this.selectedDay = null; 
  }

  openModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }

  guardarPaciente() {
    const jsonPaciente = {
      nombre: this.paciente.nombre,
      identidad: this.paciente.identidad,
      celular: this.paciente.celular,
      correo: this.paciente.correo,
      fecha_nacimiento: this.paciente.fecha_nacimiento,
      RTN: this.paciente.RTN,
      genero: this.paciente.genero,
      pais: this.paciente.pais,
      departamento: this.paciente.departamento,
      direccion: this.paciente.direccion
    }
    this.pacientesService.crearPaciente(jsonPaciente).subscribe(
      {
        next: res=>{
          console.log(res);
          this.agregadoExitosamente = true;
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  reiniciarFormulario() {
    this.agregadoExitosamente = false;
    this.verFormulario = false;
  }

  //Obtiene los horarios del service
  cargarHorarios(idEsp: any){
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
        if (idEsp) {
          this.horarios = this.horarios.filter((horario: any) => horario.idEsp === +idEsp);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //Convierte un string en Date, eje: ("12:00:00")
  convertirHora(horaString: string): Date {
    const [horas, minutos, segundos] = horaString.split(':').map(Number);
    return new Date(1970, 0, 1, horas, minutos, segundos);
  }

  //Devuelve un array de horarios filtrados según el día de la semana 
  getHorarios(): any[] {
    if (this.selectedDay) {
      const diaSemana = getDay(this.selectedDay);
      return this.horarios.filter((horario: any) => horario[this.getDiaSemana(diaSemana)]);
    }
    return [];
  }

  //Esta función toma un número que representa el día de la semana
  getDiaSemana(diaSemana: number): string {
    const diasSemana = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    return diasSemana[diaSemana];
  }
}
