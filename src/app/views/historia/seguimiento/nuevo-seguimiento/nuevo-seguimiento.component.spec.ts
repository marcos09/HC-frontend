import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSeguimientoComponent } from './nuevo-seguimiento.component';

describe('NuevoSeguimientoComponent', () => {
  let component: NuevoSeguimientoComponent;
  let fixture: ComponentFixture<NuevoSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
