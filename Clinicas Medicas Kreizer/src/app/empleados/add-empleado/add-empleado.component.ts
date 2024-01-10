import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { PuestosLaboralesService } from 'src/app/services/puestosLaborales.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {
  @ViewChild('formularioEmpleado') formularioEmpleado?: NgForm;
  departamentos: any[] = [];
  puestosLaborales: any[] = [];
  empleado: any = {};

  constructor(private empleadosService: EmpleadosService, private puestosLaboralesService:PuestosLaboralesService, private departamentosService:DepartamentosService){}

  ngOnInit(): void {
    this.departamentosService.obtenerDepartamentos().subscribe((data) => {
      this.departamentos = data;
    });
  }

  cargarPuestosLaboralesDepartamento(idDep: number) {
    this.puestosLaboralesService.obtenerPuestosDepartamento(idDep).subscribe((data) => {
      this.puestosLaborales = data;
    });
  }

  guardarEmpleado(){
    const jsonEmpleado = {
      nombre: this.empleado.nombre,
      identidad: this.empleado.identidad,
      celular: this.empleado.celular,
      genero: this.empleado.genero,
      nombre_contacto_emergencia: this.empleado.nombre_contacto_emergencia,
      conyugue: this.empleado.conyugue,
      nacionalidad: this.empleado.nacionalidad,
      nivel_certificado: this.empleado.nivel_certificado,
      escuela_superior: this.empleado.escuela_superior,
      escuela: this.empleado.escuela,
      departamento: this.empleado.departamento,
      apellidos: this.empleado.apellidos,
      fecha_nacimiento: this.empleado.fecha_nacimiento,
      correo: this.empleado.correo,
      celular_emergencias: this.empleado.celular_emergencias,
      estado_civil: this.empleado.estado_civil,
      numero_hijos: this.empleado.numero_hijos,
      idiomas: this.empleado.idiomas,
      campo_estudio: this.empleado.campo_estudio,
      escuela_media: this.empleado.escuela_media,
      pais: this.empleado.pais,
      direccion: this.empleado.direccion,
      celular_laboral: this.empleado.celular_laboral,
      area: this.empleado.area,
      direccion_laboral: this.empleado.direccion_laboral,
      correo_laboral: this.empleado.correo_laboral,
      jefe_inmediato: this.empleado.jefe_inmediato,
      aprobador: this.empleado.aprobador,
      fecha_ingreso: this.empleado.fecha_ingreso,
      idPue: this.empleado.idPue,
      contrasena: this.empleado.contrasena,
      id_credencial: this.empleado.id_credencial,
      salario: this.empleado.salario,
      PIN: this.empleado.PIN,
      estado: 'Activo',
      imagen: this.empleado.imagen,
    }
    this.empleadosService.crearEmpleado(jsonEmpleado).subscribe(
      {
        next: res=>{
          console.log(res);
          if (this.formularioEmpleado) {
            this.formularioEmpleado.resetForm();
            this.guardadoExitosamente();
          }
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  guardadoExitosamente(){
    Swal.fire({
      title: 'Guardado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000, 
    });
  }
}
