import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEstudioComponent } from './nuevo-estudio.component';

describe('NuevoEstudioComponent', () => {
  let component: NuevoEstudioComponent;
  let fixture: ComponentFixture<NuevoEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
