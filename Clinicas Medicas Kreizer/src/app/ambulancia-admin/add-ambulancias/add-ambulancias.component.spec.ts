import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmbulanciasComponent } from './add-ambulancias.component';

describe('AddAmbulanciasComponent', () => {
  let component: AddAmbulanciasComponent;
  let fixture: ComponentFixture<AddAmbulanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAmbulanciasComponent]
    });
    fixture = TestBed.createComponent(AddAmbulanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
