import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  Login(){
    console.log('tae');
  }

  resolved(data){
    console.log(data);

    this.dataService.GoogleRecapchaRequest(data).subscribe(res=>{
      console.log(data);
    })
  }

}
