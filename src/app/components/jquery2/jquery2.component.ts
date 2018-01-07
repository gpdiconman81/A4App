import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-jquery2',
  templateUrl: './jquery2.component.html',
  styleUrls: ['./jquery2.component.css']
})
export class Jquery2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('button').click(function(){
    //   alert('tae');
    // });

  }
  showModal(){
    $('#exampleModal').modal('show');
  }

  hideModal(){
    $('#exampleModal').modal('hide');
  }

  Tae(){
    console.log('Push');
  }

  setVerified(data){
    console.log(data);
  }

}
