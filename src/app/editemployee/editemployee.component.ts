import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employeeToUpdate = new Employee();

  constructor(private route: Router, private service: NgserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchEmployeeByIdFromRemote(id).subscribe(
      data=> {
        console.log("Data fetched successfully");this.employeeToUpdate = data; // This line allows us to update the view in a smooth way

      },
      error => console.log("Exception on fetching product by id to edit")
    )
  }

  updateEmployeeformsubmit()
  {
    this.service.updateEmployeeToRemote(this.employeeToUpdate).subscribe
    (
      data =>{
        console.log("Data updated successfully");
        this.route.navigate(['productlist']);
      },
      error =>console.log("Error")
    )
  }

  gotolist() {
    this.route.navigate(['productlist']);
  }

}
