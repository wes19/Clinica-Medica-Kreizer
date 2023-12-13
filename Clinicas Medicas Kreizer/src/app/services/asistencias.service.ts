import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerAsistencias():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/asistencias`,{});
  }

  actualizarAsistencia(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/asistencias/${data.idAsi}`,{
        entrada: data.nombre,
        salida: data.estado
    });
  }
}
