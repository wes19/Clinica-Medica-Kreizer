import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalaMedicaComponent } from './detail-sala-medica.component';

describe('DetailSalaMedicaComponent', () => {
  let component: DetailSalaMedicaComponent;
  let fixture: ComponentFixture<DetailSalaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSalaMedicaComponent]
    });
    fixture = TestBed.createComponent(DetailSalaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
