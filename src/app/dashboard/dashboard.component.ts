import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lastWeekBetsBtnToggle: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  receiveLastWeekBetClick($event){
    this.lastWeekBetsBtnToggle = $event;
    console.log(this.lastWeekBetsBtnToggle);
  }


}
