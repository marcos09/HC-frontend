import { TestBed, inject } from '@angular/core/testing';

import { PrescripcionService } from './prescripcion.service';

describe('PrescripcionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrescripcionService]
    });
  });

  it('should be created', inject([PrescripcionService], (service: PrescripcionService) => {
    expect(service).toBeTruthy();
  }));
});
