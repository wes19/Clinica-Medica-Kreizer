import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalaMedicaAdminService {
  private sesionSeleccionada: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private localStorageSesion: string = '';

  constructor() {
    const storedSesion = localStorage.getItem(this.localStorageSesion);
    if (storedSesion) {
      this.sesionSeleccionada.next(JSON.parse(storedSesion));
    }
  }

  setSesionSeleccionada(sesion: any) {
    this.sesionSeleccionada.next(sesion);
    localStorage.setItem(this.localStorageSesion, JSON.stringify(sesion));
  }

  getSesionSeleccionada(): Observable<any> {
    return this.sesionSeleccionada.asObservable();
  }
}
