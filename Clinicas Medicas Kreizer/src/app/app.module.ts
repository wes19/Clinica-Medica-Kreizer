import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
//import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule



//Principales
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioComponent } from './inicio/inicio.component';


import { EmpleadosComponent } from './empleados/empleados.component';
import { ProductosComponent } from './farmacia/productos/productos.component';
import { DashboardComponent } from './farmacia/dashboard/dashboard.component';
import { AddEmpleadoComponent } from './empleados/add-empleado/add-empleado.component';
import { DetailEmpleadoComponent } from './empleados/detail-empleado/detail-empleado.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CajaComponent } from './caja/caja.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ComprasComponent } from './compras/compras.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { AusenciasComponent } from './ausencias/ausencias.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { DisponibilidadComponent } from './citas/disponibilidad/disponibilidad.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarAdminComponent } from './componentes/sidebar-admin/sidebar-admin.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { AddPacientesComponent } from './pacientes/add-pacientes/add-pacientes.component';
import { DetailPacientesComponent } from './pacientes/detail-pacientes/detail-pacientes.component';
import { PortalMedicoComponent } from './portal-medico/portal-medico.component';
import { AdmisionesMedicoComponent } from './portal-medico/admisiones-medico/admisiones-medico.component';
import { PacientesMedicoComponent } from './portal-medico/pacientes-medico/pacientes-medico.component';

//import { MatDialogModule } from '@angular/material/dialog';

//Citas
import { CitasComponent } from './citas/citas.component';
import { CrearCitaComponent } from './citas/crear-cita/crear-cita.component';
import { AdmisionesComponent } from './citas/admisiones/admisiones.component';
import { AmbulanciasComponent } from './citas/ambulancias/ambulancias.component';
import { ExpedientesComponent } from './portal-medico/expedientes/expedientes.component';
import { PerfilPacienteComponent } from './portal-medico/perfil-paciente/perfil-paciente.component';
import { FarmaciaComponent } from './administracion/farmacia/farmacia.component';
import { VariantesProductosComponent } from './administracion/farmacia/variantes-productos/variantes-productos.component';
import { DetallesProductosComponent } from './administracion/farmacia/detalles-productos/detalles-productos.component';
import { AddProductosComponent } from './administracion/farmacia/add-productos/add-productos.component';
import { ConsultaPacienteComponent } from './portal-medico/consulta-paciente/consulta-paciente.component';
import { ListEmpleadosComponent } from './empleados/list-empleados/list-empleados.component';
import { ListPacientesComponent } from './pacientes/list-pacientes/list-pacientes.component';
import { PacienteExpedientesComponent } from './pacientes/paciente-expedientes/paciente-expedientes.component';
import { PerfilComponent } from './pacientes/perfil/perfil.component';
import { AmbulanciaAdminComponent } from './ambulancia-admin/ambulancia-admin.component';
import { ListAmbulanciasComponent } from './ambulancia-admin/list-ambulancias/list-ambulancias.component';
import { AddAmbulanciasComponent } from './ambulancia-admin/add-ambulancias/add-ambulancias.component';
import { DetailAmbulanciasComponent } from './ambulancia-admin/detail-ambulancias/detail-ambulancias.component';
import { SalaMedicaAdminComponent } from './sala-medica-admin/sala-medica-admin.component';
import { AddSalaMedicaComponent } from './sala-medica-admin/add-sala-medica/add-sala-medica.component';
import { DetailSalaMedicaComponent } from './sala-medica-admin/detail-sala-medica/detail-sala-medica.component';
import { ListSalaMedicaComponent } from './sala-medica-admin/list-sala-medica/list-sala-medica.component';
import { ListAsistenciasComponent } from './asistencia/list-asistencias/list-asistencias.component';
import { ListAusenciasComponent } from './ausencias/list-ausencias/list-ausencias.component';
import { AddAusenciasComponent } from './ausencias/add-ausencias/add-ausencias.component';


//Administración

registerLocaleData(localeEs); // Registra el locale en español

@NgModule({
  declarations: [
    //Principales
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    InicioComponent,


    EmpleadosComponent,
    PacientesComponent,
    ProductosComponent,
    DashboardComponent,
    AddEmpleadoComponent,
    DetailEmpleadoComponent,
    CajaComponent,
    EspecialidadesComponent,
    InventarioComponent,
    ComprasComponent,
    AsistenciaComponent,
    AusenciasComponent,
    ConfiguracionesComponent,
    DisponibilidadComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarAdminComponent,
    AdministracionComponent,
    SolicitudesComponent,
    ContabilidadComponent,
    AddPacientesComponent,
    DetailPacientesComponent,
    PortalMedicoComponent,
    AdmisionesMedicoComponent,
    PacientesMedicoComponent,

    //Citas
    CitasComponent,
    CrearCitaComponent,
    AdmisionesComponent,
    AmbulanciasComponent,
    ExpedientesComponent,
    PerfilPacienteComponent,
    FarmaciaComponent,
    VariantesProductosComponent,
    DetallesProductosComponent,
    AddProductosComponent,
    ConsultaPacienteComponent,
    ListEmpleadosComponent,
    ListPacientesComponent,
    PacienteExpedientesComponent,
    PerfilComponent,
    AmbulanciaAdminComponent,
    ListAmbulanciasComponent,
    AddAmbulanciasComponent,
    DetailAmbulanciasComponent,
    SalaMedicaAdminComponent,
    AddSalaMedicaComponent,
    DetailSalaMedicaComponent,
    ListSalaMedicaComponent,
    ListAsistenciasComponent,
    ListAusenciasComponent,
    AddAusenciasComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    
    //MatDialogModule
  ],
  exports: [
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
