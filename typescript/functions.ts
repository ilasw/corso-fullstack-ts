// Functions 

(function () {
    function sum(a: number, b: number): number {
        console.log(a, b);
        return a + b;
    }

    const output = sum(3, 2); // 5
})();

(function () {
    function restSum(...numbers: number[]): number {

        let output = 0;
        for (let index = 0; index < numbers.length; index++) {
            output += numbers[index];
        }

        // const output = numbers.reduce((acc, number) => number + acc, 0);
        return output;
    }

    const output = restSum(3, 2, 1); // 6
    console.log({ output })
})();


type User = { name: string, email: string };
const user: User = { name: '', email: 'a@b.com' };


function saveUser(user: User) {
    // const {name} = user;
}

type Coordinate = { x: number; y?: number };
function printCoord(pt: Coordinate) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


// const badPractice = function (id, title, description?: string) {

// }
// const bestPractice = function (params) {
//     const { id, title, description } = params;
// }
// bestPractice({ id, description, date })

function isBetween(string: string, starting: number, ending: number, toFind: string): boolean {
    if (ending < starting || starting > string.length) return false;
    return string.substring(starting, ending).includes(toFind);
}
// scriviamo la funzione che ci permette di capire se "toFind" 
// si trova tra i caratteri "starting" e "ending" di una stringa

isBetween('ciao', 0, 3, 'a') // true
isBetween('supercalifragilistico', 0, 10, 'z') // false

// estrarre 6 numeri casuali e stamparli a schermo (1-90)
function bingo(): Array<number> {
    const numbers = Array.from({ length: 90 }, (_, i) => i + 1);
    console.log({ numbers });

    return numbers.sort(() => Math.random() - .5).slice(0, 6);
}
console.log('Bingo numbers:', bingo()) // [4, 42, 78, 62, 43, 76]

// contare quanti cerchi sono presenti all'interno del mio numero passato in input;
// 8 -> 2
// 4 -> 0
// 9 -> 1
function circleCounter(number: string | number): number {
    const resultMap: Record<string, number> = { "6": 1, "8": 2, "9": 1, "0": 1 };
    // let output: number = 0;

    // for (let char of `${number}`) {
        // output += resultMap[char] ?? 0;
    // }

    // return output;

    return Array.from(`${number}`).reduce((acc, char) => {
        return acc + (resultMap[char] ?? 0);
    }, 0);
}
console.log('circleCounter', circleCounter(1808)); // 45

function getNumberDestructured(n: number): string {
    const numbers = Array.from(`${n}`);
    const reversNumbers = numbers.reverse();
    const reversNumbersWithZeros = reversNumbers.map((number, index) => {
        return `${number}`+"0".repeat(index);
        // return `${number}`.padEnd(index+1 , "0");
    });

    return reversNumbersWithZeros.join(' + ');

    // const initialValue: Array<string> = []
    
    // return Array.from(`${n}`).reduce((acc, _, index, array) => {
    //     const reversedChar = array[array.length- index - 1];
    //     return [...acc, (`${reversedChar}`+"0".repeat(index))];
    // }, initialValue).join(' + ');
}
console.log('getNumberDestructured:', getNumberDestructured(325243)) //  "3 + 40 + 200 + 5000+ 20000 + 300000"
console.log('getNumberDestructured:', getNumberDestructured(743)) //  "7 + 40 + 700"

// // trovare la cifra più piccola di un numero ed il suo index
// const chars = Array.from(String(432191423), (number) => parseInt(number)); // (item, index, array) => {}
// const minNumber = (Math.min(...chars));
// console.log(chars.indexOf(minNumber));


export {};