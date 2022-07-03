import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empFilter',
  pure:false
})
export class EmpFilterPipe implements PipeTransform {

  transform(emps:any, searchText:string) {
    // return emps.filter((e:any) => e.gender == gender);
    return emps.filter((e:any) => e.name.startsWith(searchText))
  }

}
