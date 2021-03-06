import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bets-last-week-table',
  templateUrl: './bets-last-week-table.component.html',
  styleUrls: ['./bets-last-week-table.component.scss']
})
export class BetsLastWeekTableComponent {

// lastWeekBetsBtnToggle: boolean;
lastWeekBets =[
    {
      "teamOne":"Eagles",
      "teamTwo":"Dallas",
      "overUnder":"+6",
      "amount":"100.00",
      "won":false,
      "lost":true,
      "additionalNotes":"Dallas is awesome"
    },
    {
      "teamOne":"GreenBay",
      "teamTwo":"SanFrancisco",
      "overUnder":"-6",
      "amount":"200.00",
      "won":true,
      "lost":false,
      "additionalNotes":"Some more notes about the game"
    },
    {
      "teamOne":"Carolina",
      "teamTwo":"Falcons",
      "overUnder":"+3",
      "amount":"50.00",
      "won":false,
      "lost":true,
      "additionalNotes":"More notes about the falcons and the fact that they suck balls and then something else happened I am just trying to get a long message to print on the screen"
    }
  ];

  // receiveLastWeekBetClick($event){
  //   this.lastWeekBetsBtnToggle = $event
  //   console.log(this.lastWeekBetsBtnToggle);
  // }

// //this is going to be in its own service. It needs to be decoupled from this component for testing and best practices
// getLastWeekBetsFromDB(){
//     this.lastWeekBets = [
//       {
//       "teamOne":"Eagles",
//       "teamTwo":"Dallas",
//       "overUnder":"+6",
//       "amount":"100.00",
//       "won":false,
//       "lost":true,
//       "additionalNotes":"Dallas is awesome"
//     },
//     {
//       "teamOne":"GreenBay",
//       "teamTwo":"SanFrancisco",
//       "overUnder":"-6",
//       "amount":"200.00",
//       "won":true,
//       "lost":false,
//       "additionalNotes":"Some more notes about the game"
//     },
//     {
//       "teamOne":"Carolina",
//       "teamTwo":"Falcons",
//       "overUnder":"+3",
//       "amount":"50.00",
//       "won":false,
//       "lost":true,
//       "additionalNotes":"More notes about the falcons and the fact that they suck balls and then something else happened I am just trying to get a long message to print on the screen"
//     }
//   ]
// }



}
