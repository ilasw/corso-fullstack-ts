import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'castArray',
})
export class CastArrayPipe implements PipeTransform {
  /*

    La pipe si occupa di trasformare i valori in input in un array.
    Nel farlo cerchiamo di adottare alcune best practices:

    1
    ok - se l'input è string scomponiamo le singole lettere;
    ok - se l'input è number scomponiamo i singoli caratteri;

    2
    ok - se l'input è array torniamo lo stesso array;

    3
    ok - se l'input è object torniamo un array di array (matrice) con [[chiave, valore]]
    ok - se l'input è una Map replichiamo il caso di object;

    4
    ok - se l'input è (null|undefined|boolean|Symbol|...) torniamo [];

    {{ [value] | castArray }}
  */

  transform(value: any): Array<any> {
    // if(typeof value === 'string' || typeof value === 'number'){
    if (['string', 'number'].includes(typeof value)) {
      return String(value).split('');
      // return [...String(value)];
      // return Array.from(String(value));
    }

    // ho un object !== null
    if(Boolean(value) && typeof value === 'object'){

      // Array
      if(Array.isArray(value)){
        return value;
      }

      // Map
      if(value instanceof Map){
        return Array.from(value.entries());
      }

      // Obj
      return Object.entries(value); // [ [key, value], ... ]
    }

    return [];
  }
}
