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
    return []
}
bingo() // [4, 42, 78, 62, 43, 76]

// contare quanti cerchi sono presenti all'interno del mio numero passato in input;
// 8 -> 2
// 4 -> 0
// 9 -> 1
function circleCounter(number: string | number): number {
    return 0;
}
circleCounter(875259420433); // 4 

