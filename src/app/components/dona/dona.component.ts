import {Component, Input, OnInit} from '@angular/core';

import { ChartType } from 'chart.js';
import {MultiDataSet, Label, Colors} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string = 'sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  //public doughnutChartType: ChartType = 'doughnut';

  public colors: Colors[] = [
    {backgroundColor: ['#6857E6','#009FEE', '#F02059']}
  ];
}
