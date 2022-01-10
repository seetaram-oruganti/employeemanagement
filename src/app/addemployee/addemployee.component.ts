import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { NgserviceService } from '../ngservice.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee = new Employee();

  constructor(private route:Router, private service: NgserviceService) { }

  ngOnInit(): void {
  }

  addEmployeeformsubmit(){
    this.service.addEmployeeToRemote(this.employee).subscribe(
      data=>
      {
        console.log("Data Added Successfully !");
        this.route.navigate(['employeelist']);
      },
      error=>console.log("Error! Unable to Employee")
    )
  }
  gotolist(){
    console.log('Go Back !');
    this.route.navigate(['employeelist']);
  }

}
