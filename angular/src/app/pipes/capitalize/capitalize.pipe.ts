import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

//Scriviamo nuova pipe che prende una stringa, la trasforma in number
// la moltiplica per due

  // transform(value: string): number { // toDoubledNumber

  transform(value: string): string {
    // Number.isNaN()

    if(value?.length < 1) return '';

    // "cIAO" -> "Ciao"
    const firstLetter = value.charAt(0).toUpperCase();
    const remainingChars = value.substring(1).toLowerCase();

    return firstLetter.concat(remainingChars);
  }

}
