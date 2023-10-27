import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasAdminComponent } from './asistencias-admin.component';

describe('AsistenciasAdminComponent', () => {
  let component: AsistenciasAdminComponent;
  let fixture: ComponentFixture<AsistenciasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciasAdminComponent]
    });
    fixture = TestBed.createComponent(AsistenciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
