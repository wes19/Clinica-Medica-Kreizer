import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalaMedicaComponent } from './list-sala-medica.component';

describe('ListSalaMedicaComponent', () => {
  let component: ListSalaMedicaComponent;
  let fixture: ComponentFixture<ListSalaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSalaMedicaComponent]
    });
    fixture = TestBed.createComponent(ListSalaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
