import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesInicioComponent } from './configuraciones-inicio/configuraciones-inicio.component';
import { PuestoLaboralComponent } from './puesto-laboral/puesto-laboral.component';

const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'inicio', component: ConfiguracionesInicioComponent },
      { path: 'puesto-laboral', component: PuestoLaboralComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ConfiguracionesRountingModule { }
