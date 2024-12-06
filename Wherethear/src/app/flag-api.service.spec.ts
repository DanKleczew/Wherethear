import { TestBed } from '@angular/core/testing';

import { FlagApiService } from './flag-api.service';

describe('FlagApiService', () => {
  let service: FlagApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
