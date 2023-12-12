import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoLaboralComponent } from './puesto-laboral.component';

describe('PuestoLaboralComponent', () => {
  let component: PuestoLaboralComponent;
  let fixture: ComponentFixture<PuestoLaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestoLaboralComponent]
    });
    fixture = TestBed.createComponent(PuestoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
