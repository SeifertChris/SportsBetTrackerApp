import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.scss']
})
export class StatsChartComponent implements OnInit {
  public chart: any;
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12'],
        datasets: [
          {
            label: "Sales",
            data: [467, 576, 572],
            backgroundColor: 'blue',
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
              labelString: 'Score'
            }
          }]
        }
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
