import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {


  employees: Array<Employee> = [];

  constructor(private route: Router, private service:NgserviceService) { }

  ngOnInit(): void {

    this.getEmployees();
    this.service.fetchEmployeeListFromRemote().subscribe(
      data=>console.log("Response Received"),
      error=>console.log("Exception Occured !")
      )
  }

  getEmployees() {
    this.service.fetchEmployeeListFromRemote().subscribe(
      data => this.employees = data, error => console.log("Exception occurred 1"),
    )
  }

  isEmpty()
  {
    if (this.employees == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddEmployee(){
    this.route.navigate(['/addemployee']);
  }

  goToUpdateEmployee(id: number) {
    console.log("id: "+ id);
    this.route.navigate(['/editemployee', id]);
  }


  goToViewEmployee(id: number){
    this.route.navigate(['/viewemployee', id]);

  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure ?'))
  return this.service.deleteEmployeeByIdFromRemote(id).subscribe(
    success =>{
      ("Product deleted succesfully");
    },
    error=> {console.log("Exception occured 2"); this.getEmployees()}
   )
  }


}
