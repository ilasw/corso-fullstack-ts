console.clear();
console.log(`I'm alive`);

// Nomenclature
const camelCaseVariable = '';
const snake_case_variable = '';
const kebabCase = 'kebab-case';
const PascalCase = 'DromedaryCase';

// Strings 
const stringa = 'stringa1'.concat(' ').concat(PascalCase);
const stringa2 = "st'r'in \n" + stringa + "ga2";
const stringa3 = `stringa3 ${stringa}`;

const date = new Date();
const month = String(date.getMonth() + 1).padStart(2, '0');
console.log({ month })

const object = { name: 'Luca' };
console.log(String(object));
console.log(JSON.stringify(object));
"{name: 'Luca'}"

const newString = new String(' a ');

console.log(stringa2);
console.log(stringa3);
console.log({ stringa, stringa2, stringa3 });

console.clear()

// Tipi di variabili
console.log(varVariabile);
log('prova')
// console.log(letVariabile); -> Error
// console.log(constVariabile); -> Error

// Queste sono utilizzabili prima per via dell'hoisting
var varVariabile = 'valore';
function log(text) {
    console.log(text)
}

// vs
let letVariabile; // no hoisting
// let letVariabile;

// vs
const constVariabile = [];
constVariabile.push('a'); // è modificabile ma non riscrivibile

// Ordine dei console.log
function log1() {
    console.log('log1')
}
// setTimeout(() => {
//     console.log('log2')
// }, 10); // ms
// setTimeout(() => {
//     console.log('log3')
// }, 0);
console.log('log4');
log1();
// Risultato: 4 1 3 2

// Function 
const name = 'Luca';

function hello() {
    const constVariabile = '';
    // closure: memoria dello scope di dichiarazione della funzione
    console.log('hello'.concat(' ').concat(name).concat('!'));
}

const hi = () => {
    const constVariabile = '';
    console.log(`Hi ${name}!`);
}

function hiToAllNames() {
    console.log(arguments); // caduta in disuso in favore del "Rest operator"
    for (let name of arguments) {
        console.log(`Ciao ${name}`);
    }
}

// self calling function
(function () {
    const name = 'Peppino';
    hi();
})();

hello();
hi();
hiToAllNames('Pippo', 'Pluto', 'Paperino');


// Esercitazione:
function sayMyName(name) {
    return function () {
        console.log(`My name is: ${name}`);
    }
}

const sayIt = sayMyName('Walter');
sayIt();
sayIt();
sayIt();

// Counter con closure
console.clear();

function createCounterStartingFrom(count) {

    if (!Number.isInteger(count)) {
        throw new Error('count is not a valid number');
    }

    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        }
    }
}

const counter = createCounterStartingFrom(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 12

// Destructoring, Rest, Spread

(function () {
    const array = [1, 2, 3, 4, 5];

    const combinedArray = array.concat([6, 7, 8]); // Crea nuovo array con: 1,2,3,4,5,6,7,8
    const sliced = array.slice(1, 3); // Nuovo array: 2,3,4
    const spliced = array.splice(0, 1); // Modifica array e lo fa diventare: 2,3,4,5
    const joined = array.join('/') // Nuova stringa con: "2/3/4/5"

    // Boolean methods
    const hasFive = array.includes(5); // true
    const someIsFive = array.some((number) => {
        return number === 5;
    }); // true
    const everyIsFive = array.every((number) => {
        return number === 5;
    }); // false

    // Index
    const indexOfOne = array.indexOf(1); // 0

    // Torna l'elemento corrispondente
    const findFive = array.find((element, index, allArray) => {
        return element === 5;
    });

    // Filtrare tornando un nuovo array
    const itemsLessThenFour = array.filter((item) => {
        return item < 4;
    }) // torna nuovo array: [1,2,3]
    // console.log({itemsLessThenFour})
    const studenti = [{ name: 'Dario', age: 20 }, { name: 'Denise', age: 18 }];
    const studentiSenior = studenti.filter((studente) => {
        return studente.age >= 20;
    });

    if (!! "condition") { // Boolean("condition");

    }

    // Boolean(4) == !!(4)
    const falsyValueFn = (value) => !(value);
    const booleanFiltered = ['', 'prova', 'ciao', false, true, null, {}, []].filter(Boolean);
    console.log({ booleanFiltered });

    // Mofidicare creando un nuovo array
    const studentAges = studenti.map((student) => student.age);
    console.log({ studentAges });

    const doubleFn = (number) => number * 2;
    const doubledArray = array.map(doubleFn);
    // const doubledArray = array.map((item) => item*2);
    console.log({ doubledArray })

    // MAI FARE!!! 
    array.map((item) => {
        console.log({ item })
    })
    // Per fare un forEach invece usare:
    const arrayForEached = array
        .filter((_, index) => index < 2) // n volte
        .forEach((item) => { // n - i valori che non passano
            console.log(item, 'forEach');
        });
    // console.log({arrayForEached}); undefined
    for (let index = 0; index < array.length; index++) {
        if (index < 2) {
            console.log(array[index], 'for');
            continue;
        }
        break;
        console.log('sono illegare nel for')
    }

    // Reimplementare forEeach -> map -> filter 

    console.log([[1, 3, 4], [2], [3]].flat()) // [1, 3, 4, 2, 3]

})();

(function () {
    // console.clear();

    const array = [];
    const array2 = new Array();
    // const array3 = Array.from("ciao");
    const array3 = Array.from({ length: 3 }, function () {

    });

    // for(let char of "ciao"){
    //     console.log({char})
    // }

    console.log(array3)

})();

// Scrivere funzione che replica il metodo forEach secondo queste specifiche:

function forEach(array, callbackFn){
    // ...
}

const logFn = (item, index, array) => console.log({item, index, array}); 

forEach([1,2,3], logFn) // -> { item: 1, index: 0, array: [1,2,3] }
                        // -> { item: 2, index: 1, array: [1,2,3] }
                        // -> { item: 3, index: 2, array: [1,2,3] }