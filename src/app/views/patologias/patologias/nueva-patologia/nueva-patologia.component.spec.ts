import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPatologiaComponent } from './nueva-patologia.component';

describe('NuevaPatologiaComponent', () => {
  let component: NuevaPatologiaComponent;
  let fixture: ComponentFixture<NuevaPatologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaPatologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
