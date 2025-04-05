import { TestBed } from '@angular/core/testing';

import { EMPServiceService } from './empservice.service';

describe('EMPServiceService', () => {
  let service: EMPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
