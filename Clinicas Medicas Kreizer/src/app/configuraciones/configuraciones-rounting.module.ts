import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesInicioComponent } from './configuraciones-inicio/configuraciones-inicio.component';


const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'inicio', component: ConfiguracionesInicioComponent },
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
