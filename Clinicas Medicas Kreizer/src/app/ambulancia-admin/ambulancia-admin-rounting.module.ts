import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAmbulanciasComponent } from './add-ambulancias/add-ambulancias.component';
import { ListAmbulanciasComponent } from './list-ambulancias/list-ambulancias.component';
import { DetailAmbulanciasComponent } from './detail-ambulancias/detail-ambulancias.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'lista', component: ListAmbulanciasComponent },
      { path: 'crear', component: AddAmbulanciasComponent },
      { path: 'detalles', component: DetailAmbulanciasComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AmbulanciaAdminRountingModule { }
