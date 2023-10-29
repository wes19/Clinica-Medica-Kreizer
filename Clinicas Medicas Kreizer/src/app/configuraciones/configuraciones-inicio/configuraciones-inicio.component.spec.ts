import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesInicioComponent } from './configuraciones-inicio.component';

describe('ConfiguracionesInicioComponent', () => {
  let component: ConfiguracionesInicioComponent;
  let fixture: ComponentFixture<ConfiguracionesInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionesInicioComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
