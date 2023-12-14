import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerAsistencias():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/asistencias`,{});
  }

  actualizarAsistencia(data: any):Observable<any>{
    const entradaFormateada = this.formatoFechaMySQL(new Date(data.entrada));
    const salidaFormateada = this.formatoFechaMySQL(new Date(data.salida));
    return this.httpClient.put(`${this.backendWeb}/asistencias/${data.idAsi}`,{
        entrada: entradaFormateada,
        salida: salidaFormateada
    });
  }

  private formatoFechaMySQL(fecha: Date): string {
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minuto = fecha.getMinutes().toString().padStart(2, '0');
    const segundo = fecha.getSeconds().toString().padStart(2, '0');
  
    return `${fecha.getFullYear()}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;
  }
}
