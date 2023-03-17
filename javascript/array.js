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

function forEach(array, callbackFn) {
    // ...
}

const logFn = (item, index, array) => console.log({ item, index, array });

forEach([1, 2, 3], logFn) // -> { item: 1, index: 0, array: [1,2,3] }
// -> { item: 2, index: 1, array: [1,2,3] }
// -> { item: 3, index: 2, array: [1,2,3] }

const map = (array, mapFn) => {
    // create new array
    const newArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // add into the new array the modified element
        newArray[index] = mapFn(element, index, array);
        // newArray.push( mapFn(element, index, array) );
    }

    // return the new array
    return newArray;
}
const doubleFn = (number) => number * 2;
map([1, 2, 3, 4], doubleFn) // -> [2,4,6,8]

function filter(array, callbackFn) {
    // 1- create a new array
    const output = [];

    // 2- check if "each item"
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        // 2.1- callbackFn must receive (item, index, array) and output true/false (Boolean).
        const isItemCompliant = callbackFn(item, index, array);

        // 2- is the item ok with the test provided by callbackFn?
        if (isItemCompliant) {
            output.push(item);
        }
    }

    // 3- return the new array 
    return output;
}
const shouldPrintCiao = filter(['ciao', false], Boolean) // -> ['ciao']
console.log({shouldPrintCiao});

console.clear();
function some(array, callbackFn){
    // dato un array, controllare ogni elemento 
    // fino a quando non trovo un match con il test della callback, a quel punto torna true
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        const isItemCompliant = callbackFn(item, index, array);

        if(isItemCompliant){
            console.log('some match item:', item)
            return true;
        }
    }

    // se non ne dovessi trovare torno false
    return false;
}
const isMoreThenTen = function(item, index, array){
    return item > 12;
}
console.log(some([5, 2, 4, 12], isMoreThenTen));


function every(array, callbackFn){
    // dato un array, controllare ogni elemento 
    // fino a quando non trovo un non-match con il test della callback, 
    // a quel punto torna false
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        const isItemCompliant = callbackFn(item, index, array);

        if(!isItemCompliant){
            console.log('some match item:', item)
            return false;
        }
    }

    // se non ne dovessi trovare torno false
    return true;
}