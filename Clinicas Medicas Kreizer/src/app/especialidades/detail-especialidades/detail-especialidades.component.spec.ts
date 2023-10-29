import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEspecialidadesComponent } from './detail-especialidades.component';

describe('DetailEspecialidadesComponent', () => {
  let component: DetailEspecialidadesComponent;
  let fixture: ComponentFixture<DetailEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(DetailEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
