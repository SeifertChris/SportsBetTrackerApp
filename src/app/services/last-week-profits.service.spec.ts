import { TestBed } from '@angular/core/testing';

import { LastWeekProfitsService } from './last-week-profits.service';

describe('LastWeekProfitsService', () => {
  let service: LastWeekProfitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastWeekProfitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
