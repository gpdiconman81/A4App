import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { FormsModule }    from '@angular/forms';

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

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';



import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeePipe } from './pipes/employee.pipe';
//import { LoadingModule,ANIMATION_TYPES } from 'ngx-loading';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MaterialComponent } from './components/material/material.component';
import { Jquery2Component } from './components/jquery2/jquery2.component';
import { RegisterComponent } from './components/register/register.component';





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
    Jquery2Component,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    routes,
    NgxPaginationModule,
    OrderModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule

   
    
  ],
  providers: [
    DataService,
    ErrorService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
