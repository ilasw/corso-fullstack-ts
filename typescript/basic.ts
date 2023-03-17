type Greeting = string | number;
type Skill = string | number;
type Coder = { 
    name: string; 
    skills: Array<Skill> // === Skill[] !== [Skill]
};

type UseState = [string, (() => void)];
const [state, setState] = ['', () => null]; // 

// type UserAddress = { street: string; city: string; country: string; zipCode: string; residence?: { floor: number } };
type UserAddressKeys = 'street' | 'city' | 'country' | 'zipCode';
type UserAddress = Record<UserAddressKeys, string> & { residence?: { floor: number } };
type ObjectType = { [prop: string]: number };

// type ErroreVoluto = string & undefined;
// const a: ErroreVoluto = '';

type FormState = 'idle' | 'dirty' | 'loading' | 'success' | 'error';

type User = {
    name: string,
    age: number,
    address?: UserAddress
};

const user: User = {
    name: '',
    age: 18,
    address: {
        street: '',
        city: 'Catania',
        country: '',
        zipCode: ''
    }
}

user.address ??= {
    street: '',
    city: 'Palermo',
    country: '',
    zipCode: '',
};

// Optional chaining;
console.log(user.address);
console.log(user.address && user.address.residence && user.address.residence.floor);
console.log(user.address?.residence?.floor);

// Nullish operator
const userResidence = user.address?.residence ?? null;
console.log({ userResidence })

// --- OT: Scambio di variabili
// let penultimo = 1;
// let ultimo = 2;
// [ultimo, penultimo] = [(penultimo + ultimo), ultimo]; // a: 2, b: (1 + 2)
// console.log({ a: penultimo, b: ultimo });
// --- /OT

// Record


// const message = prompt('Ciao');
// console.log(message.toUpperCase())

let saluto: Greeting = 'ciao';
saluto = 'hola';
saluto = 'salve';
saluto = 'hello';
saluto = 3;

const coder: Coder = {
    name: 'Giovanni Giorgio',
    skills: []
};

coder.skills.push('JS');
coder.skills.push(2);
// coder.skills.push({name: "prova"});

console.log({ coder });


// Functions

// async / await