import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusenciasAdminComponent } from './ausencias-admin.component';

describe('AusenciasAdminComponent', () => {
  let component: AusenciasAdminComponent;
  let fixture: ComponentFixture<AusenciasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AusenciasAdminComponent]
    });
    fixture = TestBed.createComponent(AusenciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
