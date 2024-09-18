import { TestBed } from '@angular/core/testing';

import { UnsplashImageSearchService } from './unsplash-image-search.service';

describe('UnsplashImageSearchService', () => {
  let service: UnsplashImageSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashImageSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
