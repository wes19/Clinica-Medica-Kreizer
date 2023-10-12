import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaMedicaComponent } from './sala-medica.component';

describe('SalaMedicaComponent', () => {
  let component: SalaMedicaComponent;
  let fixture: ComponentFixture<SalaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaMedicaComponent]
    });
    fixture = TestBed.createComponent(SalaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
