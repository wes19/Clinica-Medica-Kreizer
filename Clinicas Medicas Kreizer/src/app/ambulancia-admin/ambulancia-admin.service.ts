import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AmbulanciaAdminService {
  private ambulanciaSeleccionada: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private localStorageAmb: string = '';

  constructor() {
    const storedAmbulancia = localStorage.getItem(this.localStorageAmb);
    if (storedAmbulancia) {
      this.ambulanciaSeleccionada.next(JSON.parse(storedAmbulancia));
    }
  }

  setAmbulanciaSeleccionado(ambulancia: any) {
    this.ambulanciaSeleccionada.next(ambulancia);
    localStorage.setItem(this.localStorageAmb, JSON.stringify(ambulancia));
  }

  getAmbulanciaSeleccionado(): Observable<any> {
    return this.ambulanciaSeleccionada.asObservable();
  }
}