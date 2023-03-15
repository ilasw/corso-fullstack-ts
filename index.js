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
console.log({month})

const object = { name: 'Luca' };
console.log(String(object));
console.log(JSON.stringify(object));
"{name: 'Luca'}"

const newString = new String(' a ');

console.log(stringa2);
console.log(stringa3);
console.log({stringa, stringa2, stringa3});

console.clear()

// Tipi di variabili
console.log(varVariabile);
log('prova')
// console.log(letVariabile); -> Error
// console.log(constVariabile); -> Error

// Queste sono utilizzabili prima per via dell'hoisting
var varVariabile = 'valore';
function log (text){
    console.log(text)
}

// vs
let letVariabile; // no hoisting
// let letVariabile;

// vs
const constVariabile = [];
constVariabile.push('a'); // è modificabile ma non riscrivibile


// Function 
const name = 'Luca';

function hello(){
    const constVariabile = '';
    // closure: memoria dello scope di dichiarazione della funzione
    console.log('hello'.concat(' ').concat(name).concat('!'));
}

const hi = () => {
    const constVariabile = '';
    console.log(`Hi ${name}!`);
}

hello();
hi();

(function(){
    const name = 'Peppino';
    hi();
})();

// Ordine dei console.log
function log1(){
    console.log('log1')
}
setTimeout(() => {
    console.log('log2')
}, 10); // ms
setTimeout(() => {
    console.log('log3')
}, 0);
console.log('log4');
log1();

// 4 1 3 2