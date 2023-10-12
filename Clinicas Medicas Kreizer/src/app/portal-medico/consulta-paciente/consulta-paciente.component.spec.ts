import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPacienteComponent } from './consulta-paciente.component';

describe('ConsultaPacienteComponent', () => {
  let component: ConsultaPacienteComponent;
  let fixture: ComponentFixture<ConsultaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaPacienteComponent]
    });
    fixture = TestBed.createComponent(ConsultaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
