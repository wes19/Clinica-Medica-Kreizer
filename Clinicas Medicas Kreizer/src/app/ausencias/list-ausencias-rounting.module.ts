import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAusenciasComponent } from './add-ausencias/add-ausencias.component';
import { ListAusenciasComponent } from './list-ausencias/list-ausencias.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'lista', component: ListAusenciasComponent },
      { path: 'crear', component: AddAusenciasComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ListAusenciasRountingModule { }
