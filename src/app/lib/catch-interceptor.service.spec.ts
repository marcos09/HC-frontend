import { TestBed, inject } from '@angular/core/testing';

import { CatchInterceptorService } from './catch-interceptor.service';

describe('CatchInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatchInterceptorService]
    });
  });

  it('should be created', inject([CatchInterceptorService], (service: CatchInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
