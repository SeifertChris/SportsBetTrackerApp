import { TestBed } from '@angular/core/testing';

import { LastWeekBetsService } from './last-week-bets.service';

describe('LastWeekBetsService', () => {
  let service: LastWeekBetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastWeekBetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
