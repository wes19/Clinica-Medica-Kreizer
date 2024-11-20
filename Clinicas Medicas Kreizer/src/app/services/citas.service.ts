import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerCitas():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/citas`,{});
  }

  crearCitas(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/citas`, {
      idPac: data.idPac,
      idHora: data.idHora,
      fecha_cita: data.fecha_cita,
      estado: data.estado
    });
  }

  actualizarCitas(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/citas/${data.idCita}`, {
      idPac: data.idPac,
      idHora: data.idHora,
      fecha_cita: data.fecha_cita,
      estado: data.estado
    });
  }

  eliminarCitas(data: any):Observable<any>{
    return this.httpClient.delete(`${this.backendWeb}/citas/${data.idCita}`,{
    });
  }

  buscarCitas(criterioCitas1: number, criterioCitas2: any): Observable<any> {
    return this.httpClient.get(`${this.backendWeb}/citas/buscar?criterio1=${criterioCitas1}&criterio2=${criterioCitas2}`);
  }
  
}
