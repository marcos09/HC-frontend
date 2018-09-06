import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrescripcionComponent } from './crear-prescripcion.component';

describe('CrearPrescripcionComponent', () => {
  let component: CrearPrescripcionComponent;
  let fixture: ComponentFixture<CrearPrescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPrescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPrescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
