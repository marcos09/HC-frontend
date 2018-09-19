import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatologiasComponent } from './list-patologias.component';

describe('ListPatologiasComponent', () => {
  let component: ListPatologiasComponent;
  let fixture: ComponentFixture<ListPatologiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatologiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
