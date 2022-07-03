import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empRankOrdinal'
})
export class EmpRankOrdinalPipe implements PipeTransform {

  transform(rank:number): string {
    if (rank == 1)
      return `${rank}st`
    else if (rank==2)
      return `${rank}nd`
    else if (rank ==3)
      return `${rank}rd`
    else 
      return `${rank}th`
  }

}
