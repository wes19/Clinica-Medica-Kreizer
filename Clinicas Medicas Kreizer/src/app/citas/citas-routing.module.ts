import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { AdmisionesComponent } from './admisiones/admisiones.component';
import { AmbulanciasComponent } from './ambulancias/ambulancias.component';

const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'disponibilidad', component: DisponibilidadComponent },
      { path: 'crear-cita', component: CrearCitaComponent },
      { path: 'admisiones', component: AdmisionesComponent },
      { path: 'ambulancias', component: AmbulanciasComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class CitasRoutingModule { }
