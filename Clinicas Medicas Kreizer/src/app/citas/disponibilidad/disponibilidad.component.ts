import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval, getDay, isSameDay } from 'date-fns';
import { HorariosService } from 'src/app/services/horarios.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { CitasService } from 'src/app/services/citas.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

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
  horarios:any=[];
  especialidades:any=[];
  especialidad:any=[];
  empleados:any=[];
  paciente: any = {};
  criterioBusqueda: string = ''; 
  pacienteEncontrado: any = { nombre: '' };
  horarioSeleccionado:any=[];
  criterioCitas1: any; 
  criterioCitas2: any;
  citasPacientes:any=[];
  cantidadPacientes: number = 0;
  cuposDisponibles: boolean = false;
  mensajeError: string = ''; 
  mensajeErrorCupos: string = ''; 
  diaActual = new Date().getDay();
  diasSemana = [
    { nombre: 'dom', inicial: 'DO' },
    { nombre: 'lun', inicial: 'LU' },
    { nombre: 'mar', inicial: 'MA' },
    { nombre: 'mie', inicial: 'MI' },
    { nombre: 'jue', inicial: 'JU' },
    { nombre: 'vie', inicial: 'VI' },
    { nombre: 'sab', inicial: 'SA' }
  ];

  constructor(private modalService:NgbModal, private horariosService:HorariosService, private route: ActivatedRoute, 
    private pacientesService:PacientesService, private citasService:CitasService, private especialidadesService:EspecialidadesService) {
    this.currentMonth = new Date();
    this.generateCalendar();
    this.selectCurrentDay();
    this.route.params.subscribe(params => {
      const idEsp = params['idEsp'];
      this.cargarHorarios(idEsp);
      this.especialidadesService.obtenerEspecialidadesID(idEsp).subscribe(
        {
          next: (res: any) => {
            if (res.length > 0) {
              this.especialidad = res[0].nombre;
            }
          },
          error : err =>{
            console.log(err)
          }
        }
      );
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

  openDay(day: any) {
    if (this.validarFecha(day)) { 
      this.selectedDay = day;
    }
  }

  validarFecha(day: Date | null): boolean {
    if (!day) return false; 
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(day);
    selectedDate.setHours(0, 0, 0, 0);
    
    return selectedDate >= today; 
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

  openModal(modal: any, horario: any): void {
    this.horarioSeleccionado = horario;
    const fechaFormateada = this.selectedDay?.toISOString().split('T')[0];
    this.criterioCitas1 = this.horarioSeleccionado.idHora;
    this.criterioCitas2 = fechaFormateada;
    this.buscarCitas();
    this.mensajeError = '';
    this.mensajeErrorCupos = '';
    this.criterioBusqueda = '';
    
    this.modalService.open(modal, {
      size: 'xl',
      centered: true
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
          this.limpiarFormulario();
          this.criterioBusqueda = jsonPaciente.identidad;
          this.buscarPaciente();
          this.detallesCita();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  buscarPaciente() {
    this.pacientesService.buscarPaciente(this.criterioBusqueda).subscribe(paciente => {
        this.pacienteEncontrado = paciente;
      },
      error => {
        if (error.status === 404) {
          this.mensajeError = ' Paciente no Encontrado';
          this.pacienteEncontrado = { nombre: "" };
        }
      }
    );
  }
  
  guardarCita() {
    if (!this.validarGuardarCita()) {
      return;
    }
    const fechaFormateada = this.selectedDay?.toISOString().split('T')[0];
    const jsonCita = {
      idPac: this.pacienteEncontrado.idPac,
      idHora: this.horarioSeleccionado.idHora,
      fecha_cita: fechaFormateada,
      estado: "Pendiente"
    }
    this.citasService.crearCitas(jsonCita).subscribe(
      {
        next: res=>{
          console.log(res);
          this.buscarCitas();
          this.limpiarBusqueda();
          this.limpiarPaciente();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  validarGuardarCita(): boolean {
    const regex = /^\d{13}$/;

    if (!regex.test(this.criterioBusqueda?.trim())) {
      this.mensajeError = ' La identidad debe ser un número de 13 dígitos.';
      return false;
    }
    if (!this.pacienteEncontrado){
      this.mensajeError = ' Debe seleccionar un paciente antes de crear la cita.';
      return false;
    }
    this.cuposDisponibles = this.horarioSeleccionado.cupos > this.cantidadPacientes;
    if (!this.cuposDisponibles) {
      this.mensajeErrorCupos = ' No hay cupos disponibles para crear la cita.';
      return false;
    }
    this.mensajeError = '';
    return true;
  }  

  buscarCitas() {
    this.citasService.buscarCitas(this.criterioCitas1, this.criterioCitas2).subscribe({
      next: (res) => {
        this.citasPacientes = res.map((cita: any) => {
          if (cita.fecha_nacimiento) {
            const fechaNacimiento = new Date(cita.fecha_nacimiento);
            const hoy = new Date();
            const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - fechaNacimiento.getMonth();
            cita.edad = mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate()) ? edad - 1 : edad;
          } else {
            cita.edad = null;
          }
          return cita;
        });
        this.cantidadPacientes = this.citasPacientes.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }  

  modalDelete(cita: any){
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
        this.citasService.eliminarCitas(cita).subscribe(
          {
            next: res=>{
              console.log(res)
              this.buscarCitas();
              this.mensajeError = '';
              this.mensajeErrorCupos = '';
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

  get estadoCupos(): string {
    return this.cantidadPacientes < this.horarioSeleccionado.cupos ? 'disponibles' : 'lleno';
  }

  detallesCita() {
    this.verFormulario = false;
  }
  
  limpiarBusqueda() {
    this.criterioBusqueda = '';
  }

  limpiarPaciente() {
    this.pacienteEncontrado = '';
  }

  limpiarFormulario() {
    this.paciente = {};
  } 

}
