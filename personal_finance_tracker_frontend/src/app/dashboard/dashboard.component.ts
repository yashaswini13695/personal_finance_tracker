import { Component, OnInit } from '@angular/core';
import { ChartService } from '../service/chart.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 labelsLiST: string[] = ['Car','Fruit','Chair','Table'];
 labelsPie:string[] =  [
  'Red',
  'Blue',
  'Yellow'
];
lineLabels: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

 data: number[] = [5,2,10,3];
 sdata: number[] = [1,2,3,5];
 chartName = 'Data Charts';
 pdata: number[]= [300, 50, 100];
 ldata:number[] = [65, 59, 80, 81, 56, 55, 40];

 // Bar chart

 public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
secondBarData: number[] = [10, 20, 30, 40, 50, 60, 70]; // Data for the second bar chart

public barChartData: ChartDataset[] = [
  { data: [40, 10, 30, 5, 50, 40, 20], label: 'Dataset 1', backgroundColor: 'rgba(255, 99, 132, 0.5)' },
  { data: [60, 70, 60, 90, 70, 100, 60], label: 'Dataset 2', backgroundColor: 'rgba(54, 162, 235, 0.5)' }
];

 constructor(private chart: ChartService) {}

 ngOnInit(): void {
  this.chart.single(this.chartName,this.labelsLiST,this.data,'canvas', 'bar');
  this.chart.doughnutOrPie('canvas-pie','pie',this.labelsPie,'Pie Chart',this.pdata);
  this.chart.linechart('canvas-line-chart','line',this.lineLabels,'Line Chart',this.ldata)
  this.chart.single('Second Bar Chart', this.labelsLiST, this.secondBarData, 'canvas-second-bar-chart', 'bar'); // Add this line for the second bar chart
 }
}
