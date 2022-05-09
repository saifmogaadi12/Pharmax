import { TestBed } from '@angular/core/testing';
import { ClaimService } from './ClaimService';

describe('ReclamosService', () => {
  let service: ClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
