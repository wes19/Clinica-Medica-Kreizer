import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PuestosLaboralesService } from 'src/app/services/puestosLaborales.service';
import { EmployeeService } from '../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.scss'],
  providers: [DatePipe]
})
export class DetailEmpleadoComponent implements OnInit {
  tabActiva: string = 'infoPersonal';
  empleado: any = [];
  puestos: any = [];

  guardarContrasena = new FormGroup({
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8),]),
    conContrasena: new FormControl('', Validators.required)
  });

  constructor(private empleadosService: EmpleadosService, private employeeService: EmployeeService, 
    private modalService:NgbModal, private puestosLaboralesService:PuestosLaboralesService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  get obt(){
    return this.guardarContrasena.controls;
  }

  cargarDatos() {
    this.employeeService.getEmpleadoSeleccionado().subscribe((empleado) => {
      this.empleado = empleado;
      this.puestosLaboralesService.obtenerPuestosLaborales().subscribe(
        {
          next: (puestos) => {
            this.puestos = puestos;
            const puesto = puestos.find((pue: any) => pue.idPue === this.empleado.idPue);
            const fecha_ingreso = this.datePipe.transform(this.empleado.fecha_ingreso, 'yyyy-MM-dd');
            const fecha_nacimiento = this.datePipe.transform(this.empleado.fecha_nacimiento, 'yyyy-MM-dd');
            this.empleado = {
              ...this.empleado,
              nombrePuestoLaboral: puesto ? puesto.nombre : '', fecha_ingreso, fecha_nacimiento
            };
          },
          error: err => {
            console.log(err);
          }
        }
      );
    });
  }

  modalPassword(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }

  guardarPassword(){
    const jsonContrasena = {
      contrasena : this.guardarContrasena.controls['contrasena'].value,
      conContrasena : this.guardarContrasena.controls['conContrasena'].value,
    }

    if (jsonContrasena.contrasena !== jsonContrasena.conContrasena) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    this.modalService.dismissAll();
  }

  actualizarEmpleado(empleado: any){
    const jsonEmpleado = {
      idEmp: empleado.idEmp,
      nombre: empleado.nombre,
      apellidos: empleado.apellidos,
      identidad: empleado.identidad,
      fecha_nacimiento: empleado.fecha_nacimiento,
      celular: empleado.celular,
      correo: empleado.correo,
      genero: empleado.genero,
      celular_emergencias: empleado.celular_emergencias,
      nombre_contacto_emergencia: empleado.nombre_contacto_emergencia,
      estado_civil: empleado.estado_civil,
      conyugue: empleado.conyugue,
      numero_hijos: empleado.numero_hijos,
      nacionalidad: empleado.nacionalidad,
      idiomas: empleado.idiomas,
      nivel_certificado: empleado.nivel_certificado,
      campo_estudio: empleado.campo_estudio,
      escuela_superior: empleado.escuela_superior,
      escuela_media: empleado.escuela_media,
      escuela: empleado.escuela,
      pais: empleado.pais,
      departamento: empleado.departamento,
      direccion: empleado.direccion,
      celular_laboral: empleado.celular_laboral,
      correo_laboral: empleado.correo_laboral,
      area: empleado.area,
      jefe_inmediato: empleado.jefe_inmediato,
      direccion_laboral: empleado.direccion_laboral,
      aprobador: empleado.aprobador,
      fecha_ingreso: empleado.fecha_ingreso,
      salario: empleado.salario,
      idPue: empleado.idPue,
      PIN: empleado.PIN,
      contrasena: empleado.contrasena,
      estado: empleado.estado,
      imagen: empleado.imagen
    };
    this.empleadosService.actualizarEmpleado(jsonEmpleado).subscribe(
      {
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  archivar(){
    const jsonEmpleado = {
      idEmp: this.empleado.idEmp,
      estado: this.empleado.estado
    };
    this.empleadosService.actualizarEmpleadoEstado(jsonEmpleado).subscribe(
      {
        next: res => {
          console.log(res);
          this.cargarDatos();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
