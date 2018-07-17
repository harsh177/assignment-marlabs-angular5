import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
  Structural directives

  <h2 *ngIf="displayName; else elseBlock">Harsh Sharma</h2>

  <ng-template #elseBlock>
    <h2>Some other name</h2>
  </ng-template>

  <hr>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">this is red</div>
    <div *ngSwitchCase="'green'">this is green</div>
    <div *ngSwitchDefault>this is default</div>
  </div>

  <hr>

  <div *ngFor="let color of colors;index as i">
    <h2>{{i}}{{color}}</h2>
  </div>
  all below return true or false
  first as f 
  last as l
  odd as o
  even as e 
  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public displayName = false;

  public color = 'red';

  public colors = ["red","green","blue"];

  constructor() { }

  ngOnInit() {
  }

}
