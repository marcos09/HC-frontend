import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMedicamentoComponent } from './nuevo-medicamento.component';

describe('NuevoMedicamentoComponent', () => {
  let component: NuevoMedicamentoComponent;
  let fixture: ComponentFixture<NuevoMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
