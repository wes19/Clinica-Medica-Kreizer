import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAsistenciasComponent } from './list-asistencias/list-asistencias.component';

const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'lista', component: ListAsistenciasComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ListAsistenciasRountingModule { }
