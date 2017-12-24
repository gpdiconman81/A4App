import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from '../app/app.component';
import {UserComponent} from '../app/components/user/user.component';
import {AboutComponent} from '../app/components/about/about.component';
import {EmployeeComponent} from '../app/components/employee/employee.component'; 
import {EmployeeDetailsComponent} from '../app/components/employee-details/employee-details.component'; 

export const router:Routes = [
     
  { path:'',redirectTo:'/home', pathMatch:'full'},
  { path:'home',component:UserComponent},
  { path:'about',component:AboutComponent},
  { path:'employees',component:EmployeeComponent},
  { path:'employeedetails/:id',component:EmployeeDetailsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);