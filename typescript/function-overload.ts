
// Vorrei scrivere una funzione che:
// - se ha un solo parametro eleva a potenza;
// - se ha due parametri li moltiplica;
function powOrMultiply(a: number) : number; // eleva a potenza;
function powOrMultiply(a: number, b: number) : number; // moltiplica;
function powOrMultiply(a: number, b: number, c: string) : string; // torniamo una stringa con `${message} ${result}`;
function powOrMultiply(a: number, b?: number, c?: string){ // mette insieme le due casistiche;

    if(typeof b === 'undefined'){
        // casistica potenza;
        return a * a;
    }

    if(typeof c === 'undefined'){
        return a * b;
    }

    return `${c} ${a*b}`;
}

powOrMultiply(2) // 4
powOrMultiply(2, 3) // 6
powOrMultiply(2, 4, 'Il risultato è: ') // 4

// creare una function che ha lo scopo di inserire un elemento all'interno del DOM
// 

createElement(); // crea un <div> vuoto e lo appende sul body
createElement('article'); // crea un <article> e lo appende nel body
const el = document.querySelector<HTMLElement>('#app'); // #app è un elemento prensente in HTML
createElement('article', el); // crea un <article> e lo appende dentro el

function createElement():void;
function createElement(element: string):void;
function createElement(element:string, parent: HTMLElement|null):void;
function createElement(element?:string, parent?: HTMLElement|null){
    const tag =  element ?? 'div';
    const parentEl =  parent ?? document.body;

    const newElement = document.createElement(tag);
    newElement.innerText = `Sono un element ${tag} dentro ${parentEl.tagName}`
    parentEl.append(newElement);
}

// https://codesandbox.io/s/frosty-resonance-w6wz6x?file=/src/index.ts

export {};