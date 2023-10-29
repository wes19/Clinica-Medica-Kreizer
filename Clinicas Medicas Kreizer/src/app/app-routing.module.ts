import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './farmacia/dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CajaComponent } from './caja/caja.component';
import { InventarioComponent} from './inventario/inventario.component';
import { ComprasComponent} from './compras/compras.component';
import { AdministracionComponent} from './administracion/administracion.component';
import { SolicitudesComponent} from './solicitudes/solicitudes.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'compras', component: ComprasComponent},
  { path: 'caja', component: CajaComponent},
  { path: 'administracion', component: AdministracionComponent},
  { path: 'solicitudes', component: SolicitudesComponent},
  { path: 'contabilidad', component: ContabilidadComponent},
  { path: 'citas', loadChildren: () => import('./citas/citas.module').then( m => m.CitasModule )},
  { path: 'empleados', loadChildren: () => import('./empleados/empleados.module').then( m => m.EmpleadosModule )},
  { path: 'pacientes', loadChildren: () => import('./pacientes/pacientes.module').then( m => m.PacientesModule )},
  { path: 'portal-medico', loadChildren: () => import('./portal-medico/portal-medico.module').then( m => m.PortalMedicoModule )},
  { path: 'administracion', loadChildren: () => import('./administracion/administracion.module').then( m => m.AdministracionModule )},
  { path: 'ambulancias-admin', loadChildren: () => import('./ambulancia-admin/ambulancia-admin.module').then( m => m.AmbulanciaAdminModule )},
  { path: 'sala-medica-admin', loadChildren: () => import('./sala-medica-admin/sala-medica-admin.module').then( m => m.SalaMedicaAdminModule )},
  { path: 'asistencias', loadChildren: () => import('./asistencia/list-asistencias.module').then( m => m.ListAsistenciasModule )},
  { path: 'ausencias', loadChildren: () => import('./ausencias/list-ausencias.module').then( m => m.ListAusenciasModule )},
  { path: 'asistencias-admin', loadChildren: () => import('./asistencias-admin/asistencias-admin.module').then( m => m.AsistenciasAdminModule )},
  { path: 'ausencias-admin', loadChildren: () => import('./ausencias-admin/ausencias-admin.module').then( m => m.AusenciasAdminModule )},
  { path: 'especialidades', loadChildren: () => import('./especialidades/especialidades.module').then( m => m.EspecialidadesModule )},
  { path: 'configuraciones', loadChildren: () => import('./configuraciones/configuraciones.module').then( m => m.ConfiguracionesModule )},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
