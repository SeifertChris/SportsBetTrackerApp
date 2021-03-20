import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsLastWeekProfitsComponent } from './bets-last-week-profits.component';

describe('BetsLastWeekProfitsComponent', () => {
  let component: BetsLastWeekProfitsComponent;
  let fixture: ComponentFixture<BetsLastWeekProfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsLastWeekProfitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsLastWeekProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
