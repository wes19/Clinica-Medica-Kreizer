import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerHorario():Observable<any>{
    const horarios = this.httpClient.get(`${this.backendWeb}/horarios`);
    const especialidades = this.httpClient.get(`${this.backendWeb}/especialidades/lista`);
    const empleados = this.httpClient.get(`${this.backendWeb}/empleados/lista`);

    return forkJoin([horarios, especialidades, empleados]);
  }
}
