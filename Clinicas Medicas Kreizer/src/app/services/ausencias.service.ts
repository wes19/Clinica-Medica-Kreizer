import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AusenciasService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerAusencias():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/ausencias`,{});
  }

  actualizarAusencia(data: any):Observable<any>{
    return this.httpClient.put(`${this.backendWeb}/ausencias/${data.idAus}`,{
      estado: data.estado
    });
  }
}
