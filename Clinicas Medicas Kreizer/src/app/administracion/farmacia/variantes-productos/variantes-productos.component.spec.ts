import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantesProductosComponent } from './variantes-productos.component';

describe('VariantesProductosComponent', () => {
  let component: VariantesProductosComponent;
  let fixture: ComponentFixture<VariantesProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantesProductosComponent]
    });
    fixture = TestBed.createComponent(VariantesProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
