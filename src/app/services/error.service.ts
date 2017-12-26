import { Injectable } from '@angular/core';
import 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorService {

  constructor() { }

  errorHanler(error: Response){
    console.error(error);
    return Observable.throw(error || 'service error');
  }

}
