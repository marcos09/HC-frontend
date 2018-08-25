import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionComponent } from './prescripcion.component';

describe('PrescripcionComponent', () => {
  let component: PrescripcionComponent;
  let fixture: ComponentFixture<PrescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
