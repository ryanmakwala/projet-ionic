import { TestBed } from '@angular/core/testing';

import { DisplayRightsService } from './display-rights.service';

describe('DisplayRightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayRightsService = TestBed.get(DisplayRightsService);
    expect(service).toBeTruthy();
  });
});
