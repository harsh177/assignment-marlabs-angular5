import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  navigateToConnection(){
    this.route.navigate([{outlets:{'main':['connection']}}],{relativeTo:this.activatedRoute});
  }

}
