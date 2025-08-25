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
    return this.httpClient.put(`${this.backendWeb}/ambulancias/detalles/${data.idAmb}`, {
      placa: data.placa,
      idEmp: data.idEmp,
      tipo_ambulancia: data.tipo_ambulancia
    });
  } 

  crearAmbulancia(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/ambulancias/crear`, {
      placa: data.placa,
      idEmp: data.empleado,
      tipo_ambulancia: data.tipo_ambulancia,
      estado: data.estado
    });
  }

  crearSalida(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/ambulancias/salida/crear`, {
      idAmb: data.idAmb,
      nombre: data.nombre,
      edad: data.edad,
      genero: data.genero,
      celular_informante: data.celular_informante,
      estado_conciencia: data.estado_conciencia,
      tipo_emergencia: data.tipo_emergencia,
      ubicacion: data.ubicacion,
      informacion_adicional: data.informacion_adicional
    });
  }  

  actualizarAmbulanciaEstado(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/ambulancias/detalles/${data.idAmb}/estado`, {
      estado: data.estado
    });
  }
  
}
