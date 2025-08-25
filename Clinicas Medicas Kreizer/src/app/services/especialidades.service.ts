import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerEspecialidades():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/especialidades/lista`,{});
  }

  obtenerEspecialidadesActivas(): Observable<any> {
    return this.httpClient.get(`${this.backendWeb}/especialidades/activas`, {});
  }  

  obtenerEspecialidadesID(ID: number):Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/especialidades/lista/${ID}`,{});
  }

  crearEspecialidad(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/especialidades/crear`, {
      nombre: data.nombre,
      imagen: data.imagen,
      estado: data.estado
    });
  }

  actualizarEspecialidad(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/especialidades/lista/${data.idEsp}`,{
      nombre: data.nombre,
      imagen: data.imagen,
      estado: data.estado
    });
  }

  eliminarEspecialidad(data: any):Observable<any>{
    return this.httpClient.delete(`${this.backendWeb}/especialidades/lista/${data.idEsp}`,{});
  }
}
