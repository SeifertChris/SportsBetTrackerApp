import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-bets',
  templateUrl: './enter-bets.component.html',
  styleUrls: ['./enter-bets.component.scss']
})
export class EnterBetsComponent {

  enterBetForm = {
    firstTeamName: undefined,
    secondTeamName: undefined,
    overUnderText: undefined,
    betAmount: undefined,
    additionalNotes: undefined
  };

     onClick(){
     console.log(this.enterBetForm);

   }

}
