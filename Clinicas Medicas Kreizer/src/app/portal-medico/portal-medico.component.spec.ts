import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMedicoComponent } from './portal-medico.component';

describe('PortalMedicoComponent', () => {
  let component: PortalMedicoComponent;
  let fixture: ComponentFixture<PortalMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalMedicoComponent]
    });
    fixture = TestBed.createComponent(PortalMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
