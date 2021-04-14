import { TestBed } from '@angular/core/testing';

import { AuthenticationInfoService } from './authentication-info.service';

describe('AuthenticationInfoService', () => {
  let service: AuthenticationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
