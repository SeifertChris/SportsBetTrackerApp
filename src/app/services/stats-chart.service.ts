import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsChartService {

  getTeams() {
    return ['Eagles vs Dallas', 'GreenBay vs SanFrancisco', 'Carolina vs Falcons', 'Patriots vs Browns', 'Dolphins vs Bengals'];
  }

  getOverUnder() {
    return [6, -6, 3, -3, 3]
  }
}
