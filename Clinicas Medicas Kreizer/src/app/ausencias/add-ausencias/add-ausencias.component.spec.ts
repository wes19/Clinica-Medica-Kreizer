import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAusenciasComponent } from './add-ausencias.component';

describe('AddAusenciasComponent', () => {
  let component: AddAusenciasComponent;
  let fixture: ComponentFixture<AddAusenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAusenciasComponent]
    });
    fixture = TestBed.createComponent(AddAusenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
