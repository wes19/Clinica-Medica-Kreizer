import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.scss']
})
export class DetailEmpleadoComponent implements OnInit {
  tabActiva: string = 'infoPersonal';
  empleado: any = [];

  guardarContrasena = new FormGroup({
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8),]),
    conContrasena: new FormControl('', Validators.required)
  });

  constructor(private empleadosService: EmpleadosService, private empleadoService: EmployeeService, private modalService:NgbModal) {
  }

  ngOnInit(): void {
    this.empleadoService.getEmpleadoSeleccionado().subscribe((empleado) => {
      this.empleado = empleado;
    });
    
  }

  get obt(){
    return this.guardarContrasena.controls;
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
