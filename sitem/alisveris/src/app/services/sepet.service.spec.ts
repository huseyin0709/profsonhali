import { TestBed } from '@angular/core/testing';

import { SepetService } from './sepet.service';

describe('SepetService', () => {
  let service: SepetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
