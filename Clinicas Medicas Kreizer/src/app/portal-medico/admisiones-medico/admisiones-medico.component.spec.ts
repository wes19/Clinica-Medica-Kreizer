import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionesMedicoComponent } from './admisiones-medico.component';

describe('AdmisionesMedicoComponent', () => {
  let component: AdmisionesMedicoComponent;
  let fixture: ComponentFixture<AdmisionesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmisionesMedicoComponent]
    });
    fixture = TestBed.createComponent(AdmisionesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
