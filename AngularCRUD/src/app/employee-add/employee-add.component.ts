import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  private isEditMode = false;
  private departements : string [] = [];
  private employee = {
    name:"",
    department:"select",
    age:"",
    gender:"",
    id:""
  };
  constructor(private employeeService:EmployeeService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.employeeService.getDepartments().subscribe(data=>{
      this.departements = data;
      this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
        let edit = paramMap.get("isEdit");
        if(edit=="true")this.isEditMode = true;
        else this.isEditMode=false;
        this.employee = this.employeeService.getEmployee();
        console.log(this.employee);
      });
    },error=>{
      console.log(error);
    });
  }

  submit(){
    this.employeeService.saveEmployee(this.employee).subscribe(data=>{
      console.log("success");
    },error=>{
      console.log(error);
    });
    console.log(this.employee);
  }

  submitEdit(){
    this.employeeService.editEmployee(this.employee).subscribe(data=>{
      console.log("success");
    },error=>{
      console.log(error);
    });
    console.log(this.employee);
  }

}
