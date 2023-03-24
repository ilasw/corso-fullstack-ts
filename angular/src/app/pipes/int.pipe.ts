import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'int'
})
export class IntPipe implements PipeTransform {

  /*

  - Primo parametro un valore che può essere string|number

  -  prendiamo come 2° parametro possibile un "method" che può essere:
    "date"|"number" ed in base al valore passato da template formattiamo la data o il numero usando Intl
    - se non viene passato un secondo parametro di default  viene
    preso per buono che vogliamo fare una formattazione di numero

  - Prendiamo un ulteriore parametro che passa i nostri dati dentro le opzioni del metodo di data/numero (...)

    {{  }}
  */

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
