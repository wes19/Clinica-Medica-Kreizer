import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private empleadoSeleccionado: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private empleadoActualizado: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private actualizacionDetalle: Subject<void> = new Subject<void>();
  private localStorageKey: string = '';

  constructor() {
    const storedEmpleado = localStorage.getItem(this.localStorageKey);
    if (storedEmpleado) {
      this.empleadoSeleccionado.next(JSON.parse(storedEmpleado));
    }
  }

  setEmpleadoSeleccionado(empleado: any) {
    this.empleadoSeleccionado.next(empleado);
    localStorage.setItem(this.localStorageKey, JSON.stringify(empleado));
  }

  getEmpleadoSeleccionado(): Observable<any> {
    return this.empleadoSeleccionado.asObservable();
  }

  setActualizarEmpleado(empleado: any) {
    this.empleadoSeleccionado.next(empleado);
    this.empleadoActualizado.next(empleado);
    this.actualizacionDetalle.next();
  }

  getEmpleadoActualizado(): Observable<any> {
    return this.empleadoActualizado.asObservable();
  }

  onActualizacionDetalle(): Subject<void> {
    return this.actualizacionDetalle;
  }
}
