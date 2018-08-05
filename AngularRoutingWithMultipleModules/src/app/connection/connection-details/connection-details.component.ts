import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-connection-details',
  templateUrl: './connection-details.component.html',
  styleUrls: ['./connection-details.component.css']
})
export class ConnectionDetailsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate([{outlets:{'main':['']}}],{relativeTo:this.activatedRoute});
  }
}
