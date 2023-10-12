import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from '../empleados/add-empleado/add-empleado.component';
import { DetailEmpleadoComponent } from '../empleados/detail-empleado/detail-empleado.component';
import { ListEmpleadosComponent } from '../empleados/list-empleados/list-empleados.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: AddEmpleadoComponent }
    ]
  },
  {
    path: '',
    children: [
      { path: 'detalles', component: DetailEmpleadoComponent }
    ]
  },
  {
    path: '',
    children: [
      { path: 'lista', component: ListEmpleadosComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})

export class EmpleadosRoutingModule { }
