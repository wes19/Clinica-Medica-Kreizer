import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerDepartamentos():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/departamentos`,{});
  }

  obtenerDepartamentosActivos():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/departamentos/activos`,{});
  }

  actualizarDepartamento(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/departamentos/${data.idDep}`,{
        nombre: data.nombre,
        estado: data.estado
    });
  }

  crearDepartamento(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/departamentos/crear`, {
      nombre: data.nombre,
      estado: data.estado
    });
  }
}
