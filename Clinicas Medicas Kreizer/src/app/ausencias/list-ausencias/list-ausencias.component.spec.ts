import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAusenciasComponent } from './list-ausencias.component';

describe('ListAusenciasComponent', () => {
  let component: ListAusenciasComponent;
  let fixture: ComponentFixture<ListAusenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAusenciasComponent]
    });
    fixture = TestBed.createComponent(ListAusenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
