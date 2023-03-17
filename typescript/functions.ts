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