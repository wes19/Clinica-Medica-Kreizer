import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private empleadoSeleccionado: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setEmpleadoSeleccionado(empleado: any) {
    this.empleadoSeleccionado.next(empleado);
  }

  getEmpleadoSeleccionado(): Observable<any> {
    return this.empleadoSeleccionado.asObservable();
  }
}
