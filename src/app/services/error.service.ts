import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorService {

  constructor(private router:Router) { }

  errorHanler(error: Response){
    console.error(error);
    return Observable.throw(error || 'service error');
  }

  errorHandlerRedirect(error: Response){
    console.error(error);
    this.router.navigate['/about'];
  }

  

}
