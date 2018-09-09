import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMedicamentoComponent } from './listado-medicamento.component';

describe('ListadoMedicamentoComponent', () => {
  let component: ListadoMedicamentoComponent;
  let fixture: ComponentFixture<ListadoMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
