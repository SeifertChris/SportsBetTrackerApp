import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  lastWeekBetsBtnToggle: boolean = false;

  @Output() lastWeekBetsClick = new EventEmitter<boolean>();

  constructor() {}

  buttonClick(){
    this.lastWeekBetsBtnToggle = !this.lastWeekBetsBtnToggle;
    this.lastWeekBetsClick.emit(this.lastWeekBetsBtnToggle);
    console.log(this.lastWeekBetsBtnToggle)
  }

}
