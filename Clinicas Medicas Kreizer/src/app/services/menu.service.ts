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
}
