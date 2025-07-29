import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulanciasServices {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerAmbulancias():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/ambulancias`,{});
  }

  obtenerConductores(): Observable<any> {
    return this.httpClient.get(`${this.backendWeb}/ambulancias/conductores`);
  }
  
  actualizarAmbulancia(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/ambulancias/${data.idAmb}`, {
      placa: data.placa,
      idEmp: data.idEmp,
      tipo_ambulancia: data.tipo_ambulancia,
      estado: data.estado
    });
  }  

  crearAmbulancia(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/ambulancias/crear`, {
      placa: data.placa,
      idEmp: data.idEmp,
      tipo_ambulancia: data.tipo_ambulancia,
      estado: data.estado
    });
  }
  
}
