import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerMenu():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/inicio`,{});
  }

  actualizarMenu(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/inicio/${data.idMenu}`,{
      nombre: data.nombre,
      imagen: data.imagen,
      url: data.url,
      estado: data.estado,
    });
  }

  crearMenu(data: any): Observable<any> {
    return this.httpClient.post(`${this.backendWeb}/inicio`, {
      nombre: data.nombre,
      imagen: data.imagen,
      url: data.url,
      estado: data.estado,
    });
  }

  eliminarMenu(data: any):Observable<any>{
    return this.httpClient.delete(`${this.backendWeb}/inicio/lista/${data.idMenu}`,{
    });
  }
}
