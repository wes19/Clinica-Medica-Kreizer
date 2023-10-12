import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, startOfYear, eachMonthOfInterval } from 'date-fns';

@Component({
  selector: 'app-ausencias',
  templateUrl: './ausencias.component.html',
  styleUrls: ['./ausencias.component.scss']
})
export class AusenciasComponent {
  currentMonth: Date;
  calendarDays: (Date | null)[][] = [];
  selectedDay: Date | null = null;
  currentYear: number;
  weekDays: string[] = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(private modalService:NgbModal) {
    this.currentMonth = new Date();
    this.currentYear = this.currentMonth.getFullYear();
    this.generateAllCalendars();
  }

  generateAllCalendars(): void {
    this.calendarDays = [];

    for (let i = 0; i < 12; i++) {
      const selectedDate = new Date(this.currentMonth.getFullYear(), i, 1);
      const startDate = startOfMonth(selectedDate); // Primer día del mes
      const endDate = addMonths(startDate, 1); // Primer día del mes siguiente
      const allDays = eachDayOfInterval({ start: startDate, end: endDate }); // Todos los días del mes + el primer día del mes siguiente
      const startWeekDay = getDay(startDate); // Día de la semana del primer día del mes
      const emptyDays = new Array(startWeekDay).fill(null); // Arreglo con el día de la semana del primer día del mes

      const calendarDays = allDays.filter(day => {
        return format(day, 'MM') === format(selectedDate, 'MM');
      });
      this.calendarDays.push(emptyDays.concat(calendarDays));
    }
  }

  changeYear(change: number): void {
    this.currentYear += change;
    this.currentMonth = new Date(this.currentYear, this.currentMonth.getMonth(), 1);
    this.generateAllCalendars();
  }

  isToday(date: Date | null): boolean {
    const today = new Date();
    return date?.toDateString() === today.toDateString();
  }
  
  selectDay(day: Date | null): void {
    if (this.selectedDay !== day) {
      this.selectedDay = day;
      this.isToday = () => false;
    }
  }

  openModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
      
    });
  }
  
  

}
