import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmbulanciasComponent } from './list-ambulancias.component';

describe('ListAmbulanciasComponent', () => {
  let component: ListAmbulanciasComponent;
  let fixture: ComponentFixture<ListAmbulanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAmbulanciasComponent]
    });
    fixture = TestBed.createComponent(ListAmbulanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
