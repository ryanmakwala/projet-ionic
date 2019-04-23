import { TestBed } from '@angular/core/testing';

import { MedecineService } from './medecine.service';

describe('MedecineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedecineService = TestBed.get(MedecineService);
    expect(service).toBeTruthy();
  });
});
