import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContentService } from './content.service';

describe('ContentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
