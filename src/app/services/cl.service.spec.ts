import { TestBed } from '@angular/core/testing';

import { ClService } from './cl.service';

describe('ClService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClService = TestBed.get(ClService);
    expect(service).toBeTruthy();
  });
});
