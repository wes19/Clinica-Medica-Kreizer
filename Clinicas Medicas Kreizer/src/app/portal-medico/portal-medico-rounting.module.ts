import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaMedicaComponent } from './sala-medica/sala-medica.component';
import { SalaEsperaComponent } from './sala-espera/sala-espera.component';
import { AdmisionesMedicoComponent } from './admisiones-medico/admisiones-medico.component';
import { PacientesMedicoComponent } from './pacientes-medico/pacientes-medico.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { ConsultaPacienteComponent } from './consulta-paciente/consulta-paciente.component';

const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'sala-medica', component: SalaMedicaComponent },
      { path: 'sala-espera', component: SalaEsperaComponent },
      { path: 'admisiones-medico', component: AdmisionesMedicoComponent },
      { path: 'pacientes-medico', component: PacientesMedicoComponent },
      { path: 'perfil-paciente', component: PerfilPacienteComponent },
      { path: 'expedientes', component: ExpedientesComponent },
      { path: 'consulta-paciente', component: ConsultaPacienteComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class PortalMedicoRountingModule { }
