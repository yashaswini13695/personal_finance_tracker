import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  single(graphTitle:string, labels:any, data:any,context:string, charttype: any) {
    var chart = new Chart(context, {
      type: charttype,
      data: {
        labels: labels,
        datasets: [
          {
            label: graphTitle,
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
          // {
          //   label: graphTitle,
          //   data: data,
          //   backgroundColor: [
          //     'rgba(255, 99, 132, 0.2)',
          //     'rgba(54, 162, 235, 0.2)',
          //     'rgba(255, 206, 86, 0.2)',
          //     'rgba(75, 192, 192, 0.2)',
          //     'rgba(153, 102, 255, 0.2)',
          //     'rgba(255, 159, 64, 0.2)',
          //   ],
          //   borderColor: [
          //     'rgba(255, 99, 132, 1)',
          //     'rgba(54, 162, 235, 1)',
          //     'rgba(255, 206, 86, 1)',
          //     'rgba(75, 192, 192, 1)',
          //     'rgba(153, 102, 255, 1)',
          //     'rgba(255, 159, 64, 1)',
          //   ],
          //   borderWidth: 2,
          // },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // },
    })
  }

  doughnutOrPie(context:string,charttype: any,labels:any,graphTitle:string,data:any) {
    var chart = new Chart(context, {
      type: charttype,
      data: {
        labels: labels,
        datasets: [{
          label: graphTitle,
          data: data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4  
        }]
      }
    })
  }

  linechart(context:string, charttype: any,labels:any,graphTitle:string,data:any) {
    var chart = new Chart(context, {
      type: charttype,
      data: {
        labels: labels,
        datasets: [{
          label: graphTitle,
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    })
  }
}


  