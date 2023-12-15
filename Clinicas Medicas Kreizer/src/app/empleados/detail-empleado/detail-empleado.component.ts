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

  constructor(private empleadosService: EmpleadosService, private empleadoService: EmployeeService, 
    private modalService:NgbModal, private puestosLaboralesService:PuestosLaboralesService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  get obt(){
    return this.guardarContrasena.controls;
  }

  cargarDatos() {
    this.empleadoService.getEmpleadoSeleccionado().subscribe((empleado) => {
      this.empleado = empleado;
      this.puestosLaboralesService.obtenerPuestosLaborales().subscribe(
        {
          next: (puestos) => {
            this.puestos = puestos;
            const puesto = puestos.find((pue: any) => pue.idPue === this.empleado.idPue);
            const fecha_ingreso = this.datePipe.transform(this.empleado.fecha_ingreso, 'yyyy-MM-dd');
            this.empleado = {
              ...this.empleado,
              nombrePuestoLaboral: puesto ? puesto.nombre : '', fecha_ingreso
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
}
