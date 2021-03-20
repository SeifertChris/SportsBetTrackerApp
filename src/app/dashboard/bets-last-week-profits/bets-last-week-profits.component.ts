import { LastWeekProfitsService } from './../../services/last-week-profits.service';
import { AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-bets-last-week-profits',
  templateUrl: './bets-last-week-profits.component.html',
  styleUrls: ['./bets-last-week-profits.component.scss']
})
export class BetsLastWeekProfitsComponent implements AfterViewInit {
  lastWeekProfits;

  constructor(service:LastWeekProfitsService) {
    this.lastWeekProfits = service.getLastWeeksProfits();
  }

  ngAfterViewInit(){
    let el = document.getElementById('lastWeeksProfitsDashboard');
    el.scrollIntoView({behavior:'smooth'});
  };




}
