import { TestBed } from '@angular/core/testing';

import { QuotaionService } from './quotaion.service';

describe('QuotaionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuotaionService = TestBed.get(QuotaionService);
    expect(service).toBeTruthy();
  });
});
