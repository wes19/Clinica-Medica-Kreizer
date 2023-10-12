import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval, getDay, isSameDay } from 'date-fns';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.scss']
})

export class DisponibilidadComponent {
  currentMonth: Date;
  calendarDays: Date[] = [];
  selectedDay: Date | null = null;
  weekDays: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  verFormulario: boolean = false;
  agregadoExitosamente: boolean = false;

  constructor(private modalService:NgbModal) {
    this.currentMonth = new Date();
    this.generateCalendar();
    this.selectCurrentDay();
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
  
  previousMonth(): void {
    this.currentMonth = subMonths(this.currentMonth, 1);
    this.generateCalendar();
  }

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
    this.agregadoExitosamente = true;
  }

  reiniciarFormulario() {
    this.agregadoExitosamente = false;
    this.verFormulario = false;
  }

}
