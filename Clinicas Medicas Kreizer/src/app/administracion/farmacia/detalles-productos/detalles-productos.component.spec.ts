import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductosComponent } from './detalles-productos.component';

describe('DetallesProductosComponent', () => {
  let component: DetallesProductosComponent;
  let fixture: ComponentFixture<DetallesProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesProductosComponent]
    });
    fixture = TestBed.createComponent(DetallesProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
