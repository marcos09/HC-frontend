import { TestBed, inject } from '@angular/core/testing';

import { EstudioService } from './estudio.service';

describe('EstudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudioService]
    });
  });

  it('should be created', inject([EstudioService], (service: EstudioService) => {
    expect(service).toBeTruthy();
  }));
});
