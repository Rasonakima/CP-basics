import { TestBed } from '@angular/core/testing';

import { LpService } from './lp.service';

describe('LpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LpService = TestBed.get(LpService);
    expect(service).toBeTruthy();
  });
});
