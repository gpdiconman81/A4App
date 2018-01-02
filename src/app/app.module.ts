import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';

import {routes} from './app.router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule,MatDatepickerModule, MatRadioModule, MatFormFieldModule} from '@angular/material';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';



import { DataService } from './services/data.service';
import { ErrorService } from './services/error.service';

import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeComponent } from './components/employee/employee.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';



import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeePipe } from './pipes/employee.pipe';
//import { LoadingModule,ANIMATION_TYPES } from 'ngx-loading';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MaterialComponent } from './components/material/material.component';
import { JqueryComponent } from './components/jquery/jquery.component';
import { Jquery2Component } from './components/jquery2/jquery2.component';



//import { Ng2SearchPipeModule } from 'ng2-search-filter'; 


// const appRoutes : Routes =[
  
//   { path:'',redirectTo:'/home', pathMatch:'full'},
//   { path:'home',component:UserComponent},
//   { path:'about',component:AboutComponent}
//   //{ path:'tae',component:UserComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavbarComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeePipe,
    MaterialComponent,
    JqueryComponent,
    Jquery2Component
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //  BrowserAnimationsModule,
    //NoopAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    routes,
    NgxPaginationModule,
    OrderModule,
    Ng4LoadingSpinnerModule.forRoot(),

   
    //RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    DataService,
    ErrorService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
