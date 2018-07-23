import { TestBed, inject } from '@angular/core/testing';

import { HistoriaService } from './historia.service';

describe('HistoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriaService]
    });
  });

  it('should be created', inject([HistoriaService], (service: HistoriaService) => {
    expect(service).toBeTruthy();
  }));
});
