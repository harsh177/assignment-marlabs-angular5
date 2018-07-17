import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
  <h3>{{name}}</h3>
  <h3>{{greetUser().toUpperCase()}}</h3>
  <h3>{{siteUrl}}</h3>
  ---property binding----<br>
  <input type="text" value="harsh" [id]="myId">//same
  <input type="text" value="harsh" id="{{myId}}">//same then what is the difference?, interpolation only work
  with string values not boolean ex.
  <input type="text" value="harsh" disabled="false">//did'nt work
  <input type="text" value="harsh" [disabled]="false">//work
  alternative to square brackets
  <input type="text" value="harsh" bind-disabled="false">//work
  <hr>---class bindings----<br>
  <h2 class="text-success">Harsh Sharma</h2>
  <h2 [class]="successClass">Harsh Sharma</h2>
  if you want to conditially apply a single class<br>
  <h2 [class.text-danger]="hasError">Harsh Sharma</h2>
  if you want to conditially apply a multiple classes the use ngClass<br>
  <h2 [ngClass]="messageClasses">Harsh Sharma</h2>
  <hr>---style bindings----<br>
  <h2 [style.color]="'orange'">Style binding</h2>
  <h2 [style.color]="hasError ? 'orange' : 'green'">Style binding</h2>
  <h2 [style.color]="highlightColor">Style binding2</h2>
  <h2 [ngStyle]="titleStyles">style binding 3</h2>
  <button (click)="hello()">Say Hello</button>{{name}}
  <hr>---Template Reference Variable---<br>
  <input #logM type="text"><button (click)="logMessage(logM.value,$event)">log</button>
  <hr>---Two way binding---<br>
  <input type="text" [(ngModel)]="name" >{{name}}
  </div>`,
  styles: [`
  .text-success{
    color:green
  }
  .text-danger{
    color:red
  }
  .text-special{
    font-style:italic
  }
  `]
})

/*
selector: defines with 3 types
As tag:   selector: 'app-test'
      use : <app-test></app-test>
As class:   selector: '.app-test'
      use : <div class="app-test"></div>
As attribute:   selector: '[app-test]'
      use : <div app-test></div>

*/
export class TestComponent implements OnInit {

  public name = "Harsh Sharma";

  public myId="testId";

  public siteUrl = window.location.href;

  public successClass="text-success";

  public hasError = false;

  public isSpecial = true;

  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  };

  public highlightColor = "orange";

  public titleStyles={
    "color":"purple",
    "font-style":"italic"
  };

  hello(){
    this.name = "hello user";
  }
  constructor() { }

  greetUser(){
    return "Welcome "+this.name;
  }

  logMessage(val,event){
    console.log(val);
    console.log(event);
  }

  ngOnInit() {
  }

}
