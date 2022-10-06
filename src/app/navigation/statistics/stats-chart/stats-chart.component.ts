import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatsChartService } from 'src/app/services/stats-chart.service';

@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.scss']
})
export class StatsChartComponent implements OnInit {
  public chart: any;
  teams;
  overUnder;

  constructor(service: StatsChartService) {
    this.teams = service.getTeams();
    this.overUnder = service.getOverUnder();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: this.teams,
        datasets: [
          {
            label: "Over/Under",
            data: this.overUnder,
            backgroundColor: 'lightgreen',
            barThickness: 6,
            maxBarThickness: 8
          }
        ]
      },
      options: {
        aspectRatio: 3,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Teams'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Over/Under'
            },
            ticks: {
              suggestedMin: -10,
            },
          }]
        }
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
