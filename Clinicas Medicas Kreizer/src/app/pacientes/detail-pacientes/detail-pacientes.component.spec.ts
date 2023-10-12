import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPacientesComponent } from './detail-pacientes.component';

describe('DetailPacientesComponent', () => {
  let component: DetailPacientesComponent;
  let fixture: ComponentFixture<DetailPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPacientesComponent]
    });
    fixture = TestBed.createComponent(DetailPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
