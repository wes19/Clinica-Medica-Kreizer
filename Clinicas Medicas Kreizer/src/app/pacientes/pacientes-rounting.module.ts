import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacientesComponent } from '../pacientes/add-pacientes/add-pacientes.component';
import { DetailPacientesComponent } from '../pacientes/detail-pacientes/detail-pacientes.component';
import { ListPacientesComponent } from '../pacientes/list-pacientes/list-pacientes.component';
import { PacienteExpedientesComponent } from '../pacientes/paciente-expedientes/paciente-expedientes.component';
import { PerfilComponent } from '../pacientes/perfil/perfil.component';


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
  },
  {
    path: '',
    children: [
      { path: 'lista', component: ListPacientesComponent }
    ]
  },
  {
    path: '',
    children: [
      { path: 'paciente-expedientes', component: PacienteExpedientesComponent }
    ]
  },
  {
    path: '',
    children: [
      { path: 'perfil', component: PerfilComponent }
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
