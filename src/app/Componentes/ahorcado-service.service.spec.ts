import { TestBed } from '@angular/core/testing';

import { AhorcadoServiceService } from './ahorcado-service.service';

describe('AhorcadoServiceService', () => {
  let service: AhorcadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhorcadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
