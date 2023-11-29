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
    return this.httpClient.get(`${this.backendWeb}/especialidades`,{});
  }
}
