import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDoubledNumber'
})
export class ToDoubledNumberPipe implements PipeTransform {

  transform(value: string): number {
    const number = Number(value);

    if(Number.isNaN(number)) {
      return 0;
    }

    return number * 2;
  }

}
