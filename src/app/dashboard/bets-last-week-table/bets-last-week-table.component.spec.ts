import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsLastWeekTableComponent } from './bets-last-week-table.component';

describe('BetsLastWeekTableComponent', () => {
  let component: BetsLastWeekTableComponent;
  let fixture: ComponentFixture<BetsLastWeekTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsLastWeekTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsLastWeekTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
