import { TestBed } from '@angular/core/testing';

import { ReviewSectionService } from './review-section.service';

describe('ReviewSectionService', () => {
  let service: ReviewSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
