import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAusenciasComponent } from './panel-ausencias/panel-ausencias.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'panel', component: PanelAusenciasComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AusenciasAdminRountingModule { }
