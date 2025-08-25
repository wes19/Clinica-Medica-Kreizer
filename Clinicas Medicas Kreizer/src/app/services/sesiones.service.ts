import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  obtenerSesiones(): Observable<any> {
    return this.httpClient.get(`${this.backendWeb}/sesiones`, {});
  }

  actualizarSesion(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/sesiones/${data.idSes}`, {
      idEmp: data.idEmp,
      idEsp: data.idEsp,
      estado: data.estado,
    });
  }

  crearSesion(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/sesiones/crear`, {
      idEmp: data.idEmp,
      idEsp: data.idEsp,
      estado: data.estado,
    });
  }

  eliminarSesion(data: any): Observable<any> {
    return this.httpClient.delete(`${this.backendWeb}/sesiones/${data.idSes}`, {});
  }
}
