import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import {DataService} from '../../services/data.service';
import {Employee} from '../../models/employee';
import {AppComponent} from '../../app.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee;

  constructor(private route:ActivatedRoute, private dataService:DataService,private spinnerService: Ng4LoadingSpinnerService) { 
    this.spinnerService.show();
      
  }

  ngOnInit() {

      this.route.params.subscribe(res => {
      let t = new AppComponent();

      
      //console.log(res.id)
      this.dataService.getUser(res.id).subscribe((employee)=>{
          this.employee = employee;
          this.spinnerService.hide();
          //console.log(this.employee.name);
        });
      
      });
  }

}
