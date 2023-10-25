import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalaMedicaComponent } from './add-sala-medica/add-sala-medica.component';
import { ListSalaMedicaComponent } from './list-sala-medica/list-sala-medica.component';
import { DetailSalaMedicaComponent } from './detail-sala-medica/detail-sala-medica.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'lista', component: ListSalaMedicaComponent },
      { path: 'crear', component: AddSalaMedicaComponent },
      { path: 'detalles', component: DetailSalaMedicaComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class SalaMedicaAdminRountingModule { }
