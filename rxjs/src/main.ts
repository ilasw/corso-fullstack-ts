import { of, map, fromEvent, tap, from, interval, take, range, startWith, scan, filter, debounceTime, pairwise } from 'rxjs';

// of('Hello World')
//   .pipe(
//     map((stringa) => stringa.toUpperCase()),
//     map((text) => text.concat('!'))
//   ).subscribe();

// const formEls = document.querySelectorAll('form');
// const clickListener$ = fromEvent(formEls, 'click').pipe(
//   tap(event => console.log({ event })), // esegue, ma il return del tap viene ignorato nella catena
//   map(event => event.target), // il map modifica il valore e il suo return sarà l'input per la funzione successiva
//   tap(target => console.log({ target })),
// );

// const subscription = clickListener$.subscribe();
// from(['a', 'b', 'c']).pipe(
//   tap((value) => console.log({ value }))
// ).subscribe()


// Scrivere codice che ogni secondo aggiorna 
// la pagina inserendo a schermo l'ora esatta.
// interval(1_000).pipe(
//   tap((value) => console.log(value)),
//   map(() => new Date()),
//   map((date) => {
//     const withTwoChars = (number:number) => String(number).padStart(2, '0');

//     return `${date.getHours()} : ${withTwoChars(date.getMinutes())} : ${withTwoChars(date.getSeconds())}`;
//   }),
//   take(10),
// ).subscribe((dataPortataAStringa) => {
//   // dentro il subscrive devo scrivere le operazioni che vanno fatte ad ogni emit
//   // -> stampare la data;
//   document.body.innerHTML = dataPortataAStringa;
// })

// Bingo with RxJS
// esegui un console.log di 6 numeri randomici; ??
// "scan"
// Bonus: annuncia i risultati distanziati 1s l'uno dall'altro; // "interval"
// const allNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
// const mandrakeNumbers = allNumbers.sort(() => Math.random() - .5);

// from(mandrakeNumbers).pipe(
//   take(6)
// ).subscribe((number) => console.log(number))

// interval(10)
//   .pipe(
//     take(6),
//     scan(
//       (array: number[], _, i) => array.slice(1),
//       allNumbers.sort(() => Math.random() - .5)
//     ),
//     map(array => array[0]),
//   ).subscribe((number) => {
//     console.log(number)
//   })


// Input listener
(function () {

  /*
    - Inseriamo nell'HTML un input di testo <input type="text" class="autocomplete" />
    - ascoltiamo usando il fromEvent() gli eventi di "input" nel nostro campo;
    - usiamo il debounceTime(150) per evitare gli input troppi ravvicinati;
    - usiamo un filter() come operatore per non far passare gli input vuoti o minori di 3 caratteri;
    - nel subscriber eseguire un console.log    
  */
  const inputEl = document.querySelector<HTMLElement>('input.autocomplete');

  if (!elementExist(inputEl)) return;

  // type EventWithTarget<MioEvento = UIEvent, ElementoTarget = Element> = MioEvento & {target: ElementoTarget};
  // fromEvent<EventWithTarget<InputEvent, HTMLInputElement>>(inputEl, 'input')
  
  fromEvent<UIEvent>(inputEl, 'input')
    .pipe(
      filter(isEventAndInputEventWithTarget),
      debounceTime(250),
      map((event) => event.target.value.trim()),
      filter(text => text.length >= 3)
    )
    .subscribe({
      next: (value) => console.log({ value })
    });

    // Type guards
    function isEventAndInputEventWithTarget(event: UIEvent): event is (InputEvent & { target: HTMLInputElement }){
      return event instanceof InputEvent && !!(event.target) && event.target instanceof HTMLInputElement;
    }

    function elementExist (el: Element|null) : el is Element{
      return el instanceof Element;
    }

})();


export { }
