import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {ErrorService} from './error.service';

@Injectable()
export class DataService {

  constructor(public http:Http,private errorService: ErrorService) { 
    console.log('Data service connected');
  }

  getPost()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json())
            .catch(this.errorService.errorHanler);
          
  }

  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users45')
            .map(res=> res.json())
            .catch(this.errorService.errorHanler);
  }

  getUser(employee:string)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+employee).map(res=> res.json());
  }

}
