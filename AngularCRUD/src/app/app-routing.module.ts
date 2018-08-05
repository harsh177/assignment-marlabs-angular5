import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    path:"employeeList",
    component:EmployeeListComponent
  },
  {
    path:"employeeAdd/:isEdit",
    component:EmployeeAddComponent
  },
  {
    path:"employeeDetails/:id",
    component:EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
