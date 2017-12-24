import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  hobbies:string[];
  posts:Post[]; 

  constructor(private dataService:DataService) { 

  }

  ngOnInit() {
    this.name = 'tae';
    this.hobbies = ['sleep','eat','game']

    this.dataService.getPost().subscribe((posts) => {
      //console.log(posts);
     this.posts = posts;
    });
  }

  onClick(){
    this.name = 'Mark Pogi';
    this.hobbies.push('Drink');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
        if(this.hobbies[i] == hobby)
        {
          this.hobbies.splice(i,1);
        }
     }
    
  }

}

interface Post
{
  id:number,
  title:string,
  body:string,
  userId:number
}
