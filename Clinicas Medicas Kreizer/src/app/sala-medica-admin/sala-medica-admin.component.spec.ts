import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaMedicaAdminComponent } from './sala-medica-admin.component';

describe('SalaMedicaAdminComponent', () => {
  let component: SalaMedicaAdminComponent;
  let fixture: ComponentFixture<SalaMedicaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaMedicaAdminComponent]
    });
    fixture = TestBed.createComponent(SalaMedicaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
