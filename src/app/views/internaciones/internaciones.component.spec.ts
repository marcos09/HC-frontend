import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionesComponent } from './internaciones.component';

describe('InternacionesComponent', () => {
  let component: InternacionesComponent;
  let fixture: ComponentFixture<InternacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
