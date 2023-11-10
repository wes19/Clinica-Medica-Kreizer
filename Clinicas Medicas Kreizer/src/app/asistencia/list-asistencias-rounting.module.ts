import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAsistenciasComponent } from './list-asistencias/list-asistencias.component';
import { AsistenciaComponent } from '../asistencia/asistencia.component';

const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'lista', component: ListAsistenciasComponent }
    ]
  },
  { path: 'asistencias', component: AsistenciaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ListAsistenciasRountingModule { }
