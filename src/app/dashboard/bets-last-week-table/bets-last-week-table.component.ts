import { LastWeekBetsService } from './../../services/last-week-bets.service';
import { AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-bets-last-week-table',
  templateUrl: './bets-last-week-table.component.html',
  styleUrls: ['./bets-last-week-table.component.scss']
})
export class BetsLastWeekTableComponent implements AfterViewInit {
  lastWeekBets;


  constructor(service:LastWeekBetsService){
    this.lastWeekBets = service.getLastWeeksBets();
  }

  ngAfterViewInit(){
    let el = document.getElementById('lastWeeksBetsDashboard');
    el.scrollIntoView({behavior:'smooth'});
  };

}
