import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEspecialidadesComponent } from './add-especialidades.component';

describe('AddEspecialidadesComponent', () => {
  let component: AddEspecialidadesComponent;
  let fixture: ComponentFixture<AddEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(AddEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
