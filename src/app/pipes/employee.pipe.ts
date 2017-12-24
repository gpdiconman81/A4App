import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterEmployee'
})
export class EmployeePipe implements PipeTransform {

  transform(items: any[], criteria: string): any {

    //  if (criteria) {
    //   criteria = criteria.toLowerCase();
    //         return items.filter(function (el: string) {
    //             return el.toLowerCase().indexOf(criteria) > -1;
    //         })
    //     }
    //     return items;
    
    
   criteria = criteria.toLowerCase();
    return items.filter(item =>{
      for (let key in item ) {
        if((""+item[key]).toLowerCase().includes(criteria)){
           return true;
        }
      }
      return false;
   });
  }

}
