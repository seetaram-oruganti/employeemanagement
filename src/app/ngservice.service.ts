import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private http:HttpClient) { }

  fetchEmployeeListFromRemote():Observable<any>{
    return this.http.get<any>("http://localhost:8080/employees");
  }

  addEmployeeToRemote(employee : Employee):Observable<any>{
    return this.http.post<any>("http://localhost:8080/addEmployee",employee);
  }

  fetchEmployeeByIdFromRemote(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/getEmployeeById/'+id);
  }

  deleteEmployeeByIdFromRemote(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/deleteEmployeeById/' + id);
  }

  updateEmployeeToRemote(employee : Employee): Observable<any>{
    return this.http.post<any>('http://localhost:8080/update',employee);
  }

}
