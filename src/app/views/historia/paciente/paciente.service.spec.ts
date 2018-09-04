import { TestBed, inject } from '@angular/core/testing';

import { PacienteService } from './paciente.service';

describe('PacienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacienteService]
    });
  });

  it('should be created', inject([PacienteService], (service: PacienteService) => {
    expect(service).toBeTruthy();
  }));
});
