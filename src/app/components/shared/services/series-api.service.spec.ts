import { TestBed, inject } from '@angular/core/testing';

import { SeriesApiService } from './series-api.service';

describe('SeriesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesApiService]
    });
  });

  it('should be created', inject([SeriesApiService], (service: SeriesApiService) => {
    expect(service).toBeTruthy();
  }));
});
