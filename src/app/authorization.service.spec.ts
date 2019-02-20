import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorizationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }),
  );

  it('should be created', () => {
    const service: AuthorizationService = TestBed.get(AuthorizationService);
    expect(service).toBeTruthy();
  });
});
