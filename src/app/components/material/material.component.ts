import { Component, OnInit,ViewChild } from '@angular/core';
import {MatCheckboxModule, MatFormFieldModule, MatDatepickerModule} from '@angular/material';
import {DatePickerComponent} from 'ng2-date-picker';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  model = {};

  constructor() { }
  
  ngOnInit() {
  }

  @ViewChild('dayPicker') dayPicker: DatePickerComponent;
  
  open() {
      this.dayPicker.api.open();
  }
   
  close() {
       this.dayPicker.api.close();
  } 

}
