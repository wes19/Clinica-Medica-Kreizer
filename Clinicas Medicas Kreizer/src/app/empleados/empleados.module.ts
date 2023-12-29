import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ArchivedEmpleadoComponent } from './archived-empleado/archived-empleado.component';
import { ArchivedDetallesComponent } from './archived-detalles/archived-detalles.component';


@NgModule({
  declarations: [
    ArchivedEmpleadoComponent,
    ArchivedDetallesComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
