import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  backendWeb: string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  obtenerEmpleados():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/empleados/lista`,{});
  }

  actualizarEmpleado(data: any): Observable<any> {
    return this.httpClient.put(`${this.backendWeb}/empleados/detalles/${data.idEmp}`, {
      nombre: data.nombre,
      apellidos: data.apellidos,
      fecha_nacimiento: data.fecha_nacimiento,
      celular: data.celular,
      correo: data.correo,
      genero: data.genero,
      celular_emergencias: data.celular_emergencias,
      nombre_contacto_emergencia: data.nombre_contacto_emergencia,
      estado_civil: data.estado_civil,
      conyugue: data.conyugue,
      numero_hijos: data.numero_hijos,
      nacionalidad: data.nacionalidad,
      idiomas: data.idiomas,
      nivel_certificcado: data.nivel_certificcado,
      campo_estudio: data.campo_estudio,
      escuela_superior: data.escuela_superior,
      escuela_media: data.escuela_media,
      escuela: data.escuela,
      pais: data.pais,
      departamento: data.departamento,
      direccion: data.direccion,
      celular_laboral: data.celular_laboral,
      correo_laboral: data.correo_laboral,
      area: data.area,
      jefe_inmediato: data.jefe_inmediato,
      direccion_laboral: data.direccion_laboral,
      aprobador: data.aprobador,
      fecha_ingreso: data.fecha_ingreso,
      salario: data.salario,
      idPue: data.idPue,
      PIN: data.PIN,
      contrasena: data.contrasena,
      estado: data.estado,
      imagen: data.imagen,
    });
  }
  
}
