import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerCitas(idHora: string, fecha_cita: string):Observable<any>{
    const params = new HttpParams()
      .set('idHora', idHora)
      .set('fecha_cita', fecha_cita);
      return this.httpClient.get(`${this.backendWeb}/citas`, { params });
  }

  crearCitas(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/citas`, {
      idPac: data.idPac,
      idHora: data.idHora,
      fecha_cita: data.fecha_cita
    });
  }

  actualizarEstado(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/citas/actualizarEstado/${data.idCita}`, {
      estado: data.estado
    });
  }

  eliminarCitas(data: any):Observable<any>{
    return this.httpClient.delete(`${this.backendWeb}/citas/${data.idCita}`,{
    });
  }

  buscarCitas(idHora: number, fecha_cita: string): Observable<any> {
    const params = new HttpParams()
      .set('idHora', idHora)
      .set('fecha_cita', fecha_cita);
  
    return this.httpClient.get(`${this.backendWeb}/citas/buscar`, { params });
  }
  
}
