import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaMedicaComponent } from './add-sala-medica.component';

describe('AddSalaMedicaComponent', () => {
  let component: AddSalaMedicaComponent;
  let fixture: ComponentFixture<AddSalaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalaMedicaComponent]
    });
    fixture = TestBed.createComponent(AddSalaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
