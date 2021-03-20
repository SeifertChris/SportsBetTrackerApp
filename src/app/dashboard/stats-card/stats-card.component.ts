import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  lastWeekBetsBtnToggle: boolean = false;
  lastWeekProfitsBtnToggle: boolean = false;


  @Output() lastWeekBetsClick = new EventEmitter<boolean>();
  @Output() lastWeekProfitsClick = new EventEmitter<boolean>();

  constructor() {}

  buttonClick(){
    this.lastWeekBetsBtnToggle = !this.lastWeekBetsBtnToggle;
    this.lastWeekBetsClick.emit(this.lastWeekBetsBtnToggle);
  }

  lastWeekProfitBtnClick(){
    this.lastWeekProfitsBtnToggle = !this.lastWeekProfitsBtnToggle;
    this.lastWeekProfitsClick.emit(this.lastWeekProfitsBtnToggle);
  }

}
