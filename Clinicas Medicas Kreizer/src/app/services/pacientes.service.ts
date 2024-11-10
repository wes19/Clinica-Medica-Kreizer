import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerPaciente():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/pacientes`,{});
  }

  crearPaciente(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/pacientes`, {
      nombre: data.nombre,
      identidad: data.identidad,
      celular: data.celular,
      correo: data.correo,
      fecha_nacimiento: data.fecha_nacimiento,
      RTN: data.RTN,
      genero: data.genero,
      pais: data.pais,
      departamento: data.departamento,
      direccion: data.direccion
    });
  }

  actualizarPaciente(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/pacientes/${data.idPac}`, {
      nombre: data.nombre,
      identidad: data.identidad,
      celular: data.celular,
      correo: data.correo,
      fecha_nacimiento: data.fecha_nacimiento,
      RTN: data.RTN,
      genero: data.genero,
      pais: data.pais,
      departamento: data.departamento,
      direccion: data.direccion
    });
  }

  eliminarPaciente(data: any):Observable<any>{
    return this.httpClient.delete(`${this.backendWeb}/pacientes/${data.idPac}`,{
    });
  }
}
