import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspecialidadesComponent } from './list-especialidades.component';

describe('ListEspecialidadesComponent', () => {
  let component: ListEspecialidadesComponent;
  let fixture: ComponentFixture<ListEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(ListEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
