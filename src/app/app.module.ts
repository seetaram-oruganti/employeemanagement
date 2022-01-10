import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{path: '', component:EmployeelistComponent},
{path:'addproduct',component:AddemployeeComponent},
{path:'viewemployee',component:ViewemployeeComponent},
{path:'editemployee',component:EditemployeeComponent},
{path:'employeelist',component:EmployeelistComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    EditemployeeComponent,
    ViewemployeeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
