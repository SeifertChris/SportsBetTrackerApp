import { TestBed } from '@angular/core/testing';

import { StatsChartService } from './stats-chart.service';

describe('StatsChartService', () => {
  let service: StatsChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
