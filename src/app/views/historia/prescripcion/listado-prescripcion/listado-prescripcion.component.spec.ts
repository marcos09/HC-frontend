import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrescripcionComponent } from './listado-prescripcion.component';

describe('ListadoPrescripcionComponent', () => {
  let component: ListadoPrescripcionComponent;
  let fixture: ComponentFixture<ListadoPrescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPrescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPrescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
