import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEspecialidadesComponent } from './add-especialidades/add-especialidades.component';
import { DetailEspecialidadesComponent } from './detail-especialidades/detail-especialidades.component';
import { ListEspecialidadesComponent } from './list-especialidades/list-especialidades.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'crear', component: AddEspecialidadesComponent },
      { path: 'lista', component: ListEspecialidadesComponent },
      { path: 'detalles', component: DetailEspecialidadesComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class EspecialidadesRountingModule { }
