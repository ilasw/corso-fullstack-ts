import { Pipe, PipeTransform } from '@angular/core';

type IntlPipeMethods = 'date' | 'number';
type IntlPipeOptions = {
  number: Intl.NumberFormatOptions,
  date: Intl.DateTimeFormatOptions
};

export function formatDateByIntl(){

}

@Pipe({
  name: 'int',
})
export class IntPipe implements PipeTransform {
  /*

  - Primo parametro un valore che può essere string|number

  -  prendiamo come 2° parametro possibile un "method" che può essere:
    "date"|"number" ed in base al valore passato da template formattiamo la data o il numero usando Intl
    - se non viene passato un secondo parametro, di default  viene
    preso per buono che vogliamo fare una formattazione di numero

  - Prendiamo un ulteriore parametro che passa i nostri dati dentro le opzioni del metodo di data/numero (...)

    {{ 10000|intl:'number':{ style: 'currency', currency: 'USD'} }}
  */

  transform(value: string | number, method: 'number'): string;
  transform(value: string | number, method: 'date'): unknown;
  transform(value: string | number, method: 'number', options: Intl.NumberFormatOptions): unknown;
  transform(value: string | number, method: 'date', options: Intl.DateTimeFormatOptions): unknown;
  transform(value: string | number, method: 'date'|'number', options?: Intl.NumberFormatOptions|Intl.DateTimeFormatOptions): unknown {
    const locale = globalThis.navigator?.language;

    if(method === 'date'){
      const myDate = new Date(value);

      if(!!options){
        console.log(options);
      }

      if(Number.isNaN(myDate.getHours())){
        return `Errore: Non hai inserito una data valida`;
      }

      // if(typeof options !== 'undefined'){
      //   return new Intl.DateTimeFormat('it', options).format(myDate);
      // }

      return new Intl.DateTimeFormat('it').format(myDate);
    }


    if(Number.isNaN(Number(value)) ){
      return `Errore: non hai inserito un numero valido`;
    }

    if(options){
      return new Intl.NumberFormat('it', options).format(Number(value));
    }

    return new Intl.NumberFormat(locale).format(Number(value));
  }
}

function isWeakFormatDateOption(
  method: 'number' | 'date',
  options: Intl.DateTimeFormatOptions | Intl.NumberFormatOptions
): options is Intl.DateTimeFormatOptions {
  return method === 'date'
}

function isFormatDateOption(
  options: Intl.DateTimeFormatOptions | Intl.NumberFormatOptions
): options is Intl.DateTimeFormatOptions {

  const dateKeyOptions = ['localeMatcher','weekday','era','year','month','day','hour','minute','second','timeZoneName','formatMatcher','hour12','timeZone'  ];
  const optionsKey = Object.keys(options);

  if(optionsKey.length){
     return true;
    }

  for(let key of dateKeyOptions){
    if(key in options){
      return true;
    }
  }

  return false;
}
