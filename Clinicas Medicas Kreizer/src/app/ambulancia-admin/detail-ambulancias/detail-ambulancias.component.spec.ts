import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAmbulanciasComponent } from './detail-ambulancias.component';

describe('DetailAmbulanciasComponent', () => {
  let component: DetailAmbulanciasComponent;
  let fixture: ComponentFixture<DetailAmbulanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAmbulanciasComponent]
    });
    fixture = TestBed.createComponent(DetailAmbulanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
