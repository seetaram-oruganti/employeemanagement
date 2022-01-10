import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  employee = new Employee();
  constructor(private route:Router, private service: NgserviceService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = parseInt(this.activatedRouter.snapshot.paramMap.get('id'));
    // this.service.fetchEmployeeByIdFromRemote(id).subscribe(
    // data=>{
    //   console.log("data received");
    //   this.employee = data;
    // },
    //   error => console.log("Exception Occured")
    // )
  } 

  gotolist() {
    this.route.navigate(['employeelist']);
  }

}
