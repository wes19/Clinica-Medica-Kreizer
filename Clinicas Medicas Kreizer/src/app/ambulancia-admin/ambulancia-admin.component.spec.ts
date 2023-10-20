import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanciaAdminComponent } from './ambulancia-admin.component';

describe('AmbulanciaAdminComponent', () => {
  let component: AmbulanciaAdminComponent;
  let fixture: ComponentFixture<AmbulanciaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbulanciaAdminComponent]
    });
    fixture = TestBed.createComponent(AmbulanciaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
