import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg = "";

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    //this.employees = this._employeeService.getEmployee();
    this._employeeService.getEmployeeHttp().subscribe(data=>{
      this.employees=data
    },error=>{
      console.error(error);
      this.errorMsg = error;
    });
  }

  
}
