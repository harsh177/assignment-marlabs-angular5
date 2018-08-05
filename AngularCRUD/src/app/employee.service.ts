import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError as observableThrowError, } from '../../node_modules/rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IEmployee } from './employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url_base:string = "http://localhost:8080/employee";
  private _url_departements:string = this._url_base+"/departments";
  private _url_create_employee:string = this._url_base+"/create";
  private _url_getall_employee:string = this._url_base+"/getAll";
  private _url_delete_employee:string = this._url_base+"/delete?id=";
  private _url_update_employee:string = this._url_base+"/update";

  constructor(private http:HttpClient) { }

  getDepartments():Observable<string[]>{
    return this.http.get<string[]>(this._url_departements).pipe(tap(data => data) , catchError(this.errorHandler));
  }

  saveEmployee(employee):Observable<IEmployee>{
    return this.http.post<IEmployee>(this._url_create_employee,employee).pipe(tap(data=>data),catchError(this.errorHandler));
  }

  editEmployee(employee):Observable<IEmployee>{
    return this.http.put<IEmployee>(this._url_update_employee,employee).pipe(tap(data=>data),catchError(this.errorHandler));
  }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url_getall_employee).pipe(tap(data => data) , catchError(this.errorHandler));
  }

  delete(id):Observable<boolean>{
    return this.http.delete<boolean>(this._url_delete_employee+id).pipe(tap(data => data) , catchError(this.errorHandler));
  }

  private employee = {
    name:"",
    department:"select",
    age:"",
    gender:"",
    id:""
  }
  public setEmployee(employee){
    this.employee = employee;
  }

  public getEmployee(){
    return this.employee;
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
