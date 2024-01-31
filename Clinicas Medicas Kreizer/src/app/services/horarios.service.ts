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

  actualizarHorario(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/horarios/${data.idHora}`,{
      idEsp: data.idEsp,
      idEmp: data.idEmp,
      hora_inicio: data.hora_inicio,
      hora_final: data.hora_final,
      lun: data.lun,
      mar: data.mar,
      mie: data.mie,
      jue: data.jue,
      vie: data.vie,
      sab: data.sab,
      dom: data.dom,
      estado: data.estado,
    });
  }
}
