import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = "/assets/data/employee.json";

  constructor(private _http:HttpClient) { }

  getEmployee(){
    return [{"id":1,"name":"Harsh"},{"id":1,name:"Ramesh"},{"id":1,name:"Bob"},{"id":1,"name":"Toy"}];
  }

  getEmployeeHttp():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this.url);
  }

}

