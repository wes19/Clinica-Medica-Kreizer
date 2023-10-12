import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacientesComponent } from '../pacientes/add-pacientes/add-pacientes.component';
import { DetailPacientesComponent } from '../pacientes/detail-pacientes/detail-pacientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: AddPacientesComponent }
    ]
  },
  {
    path: '',
    children: [
      { path: 'detalles', component: DetailPacientesComponent }
    ]
  } 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})

export class PacientesRountingModule { }
