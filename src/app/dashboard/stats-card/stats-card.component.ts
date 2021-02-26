import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  message = 'hello world'
  constructor() { }

  ngOnInit(): void {
  }

  betsLastWeekClick(){
    console.log(this.message);
  }

}
