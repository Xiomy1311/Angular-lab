import { TestBed, inject } from '@angular/core/testing';

import { GenderizeService } from './genderize.service';

describe('GenderizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenderizeService]
    });
  });

  it('should be created', inject([GenderizeService], (service: GenderizeService) => {
    expect(service).toBeTruthy();
  }));
});
