import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAsistenciasComponent } from './panel-asistencias/panel-asistencias.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'panel', component: PanelAsistenciasComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AsistenciasAdminRountingModule { }
