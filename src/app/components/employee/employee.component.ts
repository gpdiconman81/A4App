import { Component, OnInit } from '@angular/core';

import {Employee} from '../../models/employee';
import {DataService} from '../../services/data.service';
//import { Router } from '@angular/router/src/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[];
  order: string = 'name';
  reverse: boolean = false;
  errorMsg : string;

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    
    this.dataService.getUsers().
      subscribe(employess => {this.employees = employess},
                ResError => {
                  this.errorMsg = ResError
                  this.router.navigate(['/about']);
                }
    );

   
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
