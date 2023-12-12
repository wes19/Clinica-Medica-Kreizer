import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private empleadoSeleccionado: BehaviorSubject<any> = new BehaviorSubject<any>(null);
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

}
