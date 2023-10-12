import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteExpedientesComponent } from './paciente-expedientes.component';

describe('PacienteExpedientesComponent', () => {
  let component: PacienteExpedientesComponent;
  let fixture: ComponentFixture<PacienteExpedientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteExpedientesComponent]
    });
    fixture = TestBed.createComponent(PacienteExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
