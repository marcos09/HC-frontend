import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEstudiosHistoriaComponent } from './detalle-estudios-historia.component';

describe('DetalleEstudiosHistoriaComponent', () => {
  let component: DetalleEstudiosHistoriaComponent;
  let fixture: ComponentFixture<DetalleEstudiosHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEstudiosHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstudiosHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
