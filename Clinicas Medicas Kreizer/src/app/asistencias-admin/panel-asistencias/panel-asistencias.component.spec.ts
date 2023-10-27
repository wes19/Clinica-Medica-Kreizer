import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAsistenciasComponent } from './panel-asistencias.component';

describe('PanelAsistenciasComponent', () => {
  let component: PanelAsistenciasComponent;
  let fixture: ComponentFixture<PanelAsistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAsistenciasComponent]
    });
    fixture = TestBed.createComponent(PanelAsistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
