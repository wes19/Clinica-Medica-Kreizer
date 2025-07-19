import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-admisiones',
  templateUrl: './admisiones.component.html',
  styleUrls: ['./admisiones.component.scss']
})
export class AdmisionesComponent implements OnInit {

  horarios:any=[];
  especialidades:any=[];
  empleados:any=[];
  options:any=[];
  citas:any=[];
  especialidadesTemporal: any = [];
  selectedOption: any = {};
  fechaSeleccionada: string = '';
  fechaMostrar: string = '';
  dia: Date = new Date();
  diasSemana = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
  menuVisible: number | null = null;

  constructor(private modalService:NgbModal, private horariosService:HorariosService, private especialidadesService:EspecialidadesService, 
    private citasService:CitasService) {
  }

  ngOnInit(): void {
    this.fechaMostrar = this.formatearFecha(this.getFechaHoy());
    this.especialidadesService.obtenerEspecialidades().subscribe(
      {
        next: res=> {
          this.options = [];
          this.especialidadesTemporal = res;
          for(let i = 0; i < this.especialidadesTemporal.length; i++){
            if(this.especialidadesTemporal[i].estado == 'Activo'){
              this.options.push(this.especialidadesTemporal[i]);
            }
          }
          if (this.options.length > 0) {
            this.selectedOption = this.options[0];
            this.cargarHorarios(this.options[0].idEsp);
          }
        },
        error: err =>{
          console.log(err);
        }
      }
    )
  }

  openModal(modal: any, horario: any): void {
    this.cargarCitas(horario.idHora);
    this.modalService.open(modal, {
      size: 'xl',
      centered: true,
    });
  }

  // Cargar Citas
  cargarCitas(idHora: any){
    const fechaMostrar = this.convertirFecha(this.fechaMostrar);
    this.citasService.buscarCitas(idHora, fechaMostrar).subscribe(
      {
        next: res=> {
          this.citas = res;
        },
        error: err =>{
          console.log(err);
        }
      }
    )
  }

  // Obtiene los horarios del service
  cargarHorarios(idEsp: number){
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
          const diaNumero = this.dia.getDay();
          const diaTexto = this.diasSemana[diaNumero]; 
          this.horarios = this.horarios.filter((horario: any) => horario.idEsp === +idEsp && horario.estado === 1 && horario[diaTexto] === 1);
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

  convertirFecha(fecha: string): string {
    const [dia, mes, anio] = fecha.split('-');
    return `${anio}-${mes}-${dia}`;
  }

  onFechaChange(event: any) {
    this.fechaSeleccionada = event.target.value;
    this.fechaMostrar = this.formatearFecha(this.fechaSeleccionada);
    const partes = this.fechaSeleccionada.split('-');
    this.dia = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    this.cargarHorarios(this.selectedOption.idEsp)
  }
  
  abrirCalendario(input: HTMLInputElement) {
    input.showPicker ? input.showPicker() : input.click();
  }
  
  formatearFecha(fecha: string): string {
    if (!fecha) return '';
    const partes = fecha.split('-');
    if (partes.length !== 3) return fecha;
    return `${partes[2]}-${partes[1]}-${partes[0]}`;
  }

  getFechaHoy(): string {
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = ('0' + (hoy.getMonth() + 1)).slice(-2);
    const dd = ('0' + hoy.getDate()).slice(-2);
    return `${yyyy}-${mm}-${dd}`;
  }

  getEstado(estado: string): string {
    switch (estado) {
      case 'Pendiente':
        return 'kz-chip-estado kz-chip-estado-gray';
      case 'En Espera':
        return 'kz-chip-estado kz-chip-estado-yellow';
      case 'En Progreso':
        return 'kz-chip-estado kz-chip-estado-blue';
      case 'Atendido':
        return 'kz-chip-estado kz-chip-estado-green';
      default:
        return 'kz-chip-estado kz-chip-estado-red';
    }
  }

  mostrarMenu(id: number): void {
    this.menuVisible = this.menuVisible === id ? null : id;
  }
  
  ActualizarEstado(cita: any, estado: string): void {
    const jsonCita = {
      idCita: cita.idCita,
      estado: estado
    }
    this.citasService.actualizarEstado(jsonCita).subscribe(
      {
        next: res=> {
          console.log(res)
          this.cargarCitas(cita.idHora);
          this.menuVisible = null;
        },
        error: err =>{
          console.log(err);
        }
      }
    )
  }

}
