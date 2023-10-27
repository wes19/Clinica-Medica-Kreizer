import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAusenciasComponent } from './panel-ausencias.component';

describe('PanelAusenciasComponent', () => {
  let component: PanelAusenciasComponent;
  let fixture: ComponentFixture<PanelAusenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAusenciasComponent]
    });
    fixture = TestBed.createComponent(PanelAusenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
