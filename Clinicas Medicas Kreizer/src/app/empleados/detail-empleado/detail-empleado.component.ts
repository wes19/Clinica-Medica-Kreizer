import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PuestosLaboralesService } from 'src/app/services/puestosLaborales.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmployeeService } from '../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.scss'],
  providers: [DatePipe]
})
export class DetailEmpleadoComponent implements OnInit {
  tabActiva: string = 'infoPersonal';
  empleado: any = [];
  departamentos: any = [];
  puestosLaborales: any = [];
  puestos: any = [];

  guardarContrasena = new FormGroup({
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8),]),
    conContrasena: new FormControl('', Validators.required)
  });

  constructor(private empleadosService: EmpleadosService, private employeeService: EmployeeService, 
    private modalService:NgbModal, private puestosLaboralesService:PuestosLaboralesService, private datePipe: DatePipe,
    private departamentosService:DepartamentosService) {
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  get obt(){
    return this.guardarContrasena.controls;
  }

  cargarDatos() {
    this.employeeService.getEmpleadoSeleccionado().subscribe((empleado) => {
      this.obtenerDepartamentos();
      this.empleado = empleado;
  
      const fecha_ingreso = this.datePipe.transform(empleado.fecha_ingreso, 'yyyy-MM-dd');
      const fecha_nacimiento = this.datePipe.transform(empleado.fecha_nacimiento, 'yyyy-MM-dd');
      this.empleado = { ...empleado, fecha_ingreso, fecha_nacimiento };

      this.obtenerPuestosLaborales();
    });
  }

  obtenerPuestosLaborales() {
    this.puestosLaboralesService.obtenerPuestosLaboralesActivos().subscribe({
      next: (puestos) => {
        this.puestos = puestos;
        const puesto = puestos.find((pue: any) => pue.idPue === this.empleado.idPue);
        this.empleado.idDep = puesto.idDep;
        this.cargarPuestosLaborales(this.empleado.idDep);
      },
      error: (err) => console.log(err)
    });
  }

  obtenerDepartamentos(){
    this.departamentosService.obtenerDepartamentosActivos().subscribe({
      next: (res) => {
        this.departamentos = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  cargarPuestosLaborales(idDep: number) {
    this.puestosLaboralesService.obtenerPuestosDepartamento(idDep).subscribe((data) => {
      this.puestosLaborales = data;
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
    this.empleadosService.actualizarEmpleado(empleado).subscribe(
      {
        next: res => {
          console.log(res);
          this.editadoExitosamente();
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
      estado : this.empleado.estado = 0,
    }
    this.empleadosService.actualizarEmpleadoEstado(jsonEmpleado).subscribe(
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

  desarchivar(){
    const jsonEmpleado = {
      idEmp: this.empleado.idEmp,
      estado : this.empleado.estado = 1,
    }
    this.empleadosService.actualizarEmpleadoEstado(jsonEmpleado).subscribe(
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

  subirImagen(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.empleado.imagen = `../assets/img/empleados/${file.name}`;
      };
      reader.readAsDataURL(file);
    }
  }  

  editadoExitosamente(){
    Swal.fire({
      title: 'Editado Exitosamente!',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000, 
    });
  }
}
