import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesInicioComponent } from './configuraciones-inicio/configuraciones-inicio.component';
import { PuestoLaboralComponent } from './puesto-laboral/puesto-laboral.component';
import { DepartamentoComponent } from './departamento/departamento.component';

const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'inicio', component: ConfiguracionesInicioComponent },
      { path: 'departamentos', component: DepartamentoComponent },
      { path: 'puestos-laborales', component: PuestoLaboralComponent }
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
