import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastWeekProfitsService {

  constructor() { }

  getLastWeeksProfits(){
    return [
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
      },
      {
        "teamOne":"Patriots",
        "teamTwo":"Browns",
        "overUnder":"-3",
        "amount":"500.00",
        "won":true,
        "lost":false,
        "additionalNotes":"Tom Brady playing against his old team"
      }
    ];
  }

  getProfitTotal(){

  }
}
