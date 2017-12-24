import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected');
  }

  getPost()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }

  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res=> res.json());
  }

  getUser(employee:string)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+employee).map(res=> res.json());
  }

}
