import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologiasComponent } from './patologias.component';

describe('PatologiasComponent', () => {
  let component: PatologiasComponent;
  let fixture: ComponentFixture<PatologiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatologiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
