import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRrhhComponent } from './sidebar-rrhh.component';

describe('SidebarRrhhComponent', () => {
  let component: SidebarRrhhComponent;
  let fixture: ComponentFixture<SidebarRrhhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarRrhhComponent]
    });
    fixture = TestBed.createComponent(SidebarRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
