import { Component, OnInit } from '@angular/core';

import {Employee} from '../../models/employee';
import {DataService} from '../../services/data.service';
//import {EmployeePipe} from '';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[];
  order: string = 'name';
  reverse: boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((employess) =>{
      this.employees = employess;
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
