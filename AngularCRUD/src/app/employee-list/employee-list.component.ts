import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee-interface';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employees = [];

  constructor(private employeeService:EmployeeService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(data=>{
      this.employees = data;
    },error=>{
      console.log(error);
    });
  }

  delete(id){
    this.employeeService.delete(id).subscribe(data=>{
      this.getEmployees();
    },error=>{
      console.log(error);
    });
  }

  edit(employee){
    this.employeeService.setEmployee(employee);
    this.router.navigate(['employeeAdd',true]);
  }

}
