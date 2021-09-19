import { Component } from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {



  /*constructor() { }

  ngOnInit(): void {
  }
*/
  public labels: string[] = ['Pan', 'Huevo', 'Queso'];
  public data: MultiDataSet = [
    [20, 35, 45],
  ];

}
