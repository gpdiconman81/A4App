import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
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
    return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(res=> res.json())
            .catch(this.errorService.errorHanler);
  }

  getUser(employee:string)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+employee).map(res=> res.json());
  }

  GoogleRecapchaRequest(capChaResposponse:string){

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    

    let body = new URLSearchParams;
    body.set('secret', '6Le7oD8UAAAAAD89Dm6nI-JRKezvgp_s0yy_jsv7');
    body.set('response', capChaResposponse);


    // var body = {
    //               secret : '6Le7oD8UAAAAAD89Dm6nI-JRKezvgp_s0yy_jsv7',
    //               response  : capChaResposponse,
    //            };
    return this.http.post('https://www.google.com/recaptcha/api/siteverify',body,{headers:headers}).map(res=> res.json());

  }

}
