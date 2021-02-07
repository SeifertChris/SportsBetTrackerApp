import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBetsComponent } from './enter-bets.component';

describe('EnterBetsComponent', () => {
  let component: EnterBetsComponent;
  let fixture: ComponentFixture<EnterBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterBetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
