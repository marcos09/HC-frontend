import { TestBed, inject } from '@angular/core/testing';

import { PatologiaService } from './patologia.service';

describe('PatologiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatologiaService]
    });
  });

  it('should be created', inject([PatologiaService], (service: PatologiaService) => {
    expect(service).toBeTruthy();
  }));
});
