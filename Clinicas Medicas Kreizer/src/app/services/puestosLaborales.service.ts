import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuestosLaboralesService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerPuestosLaborales():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/puestos-laborales`,{});
  }

  obtenerPuestosLaboralesActivos():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/puestos-laborales/activos`,{});
  }

  actualizarPuestoLaboral(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/puestos-laborales/${data.idPue}`,{
    });
  }

  crearPuestoLaboral(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/puestos-laborales/crear`, {
        idDep: data.idDep,
        nombre: data.nombre,
        estado: data.estado
    });
  }

  obtenerPuestosDepartamento(data: number): Observable<any> {
    return this.httpClient.get(`${this.backendWeb}/puestos-laborales/departamento/${data}`);
  }
}
