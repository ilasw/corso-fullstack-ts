type Greeting = string | number;
type Skill = string | number;
type Coder = { name: string; skills: Array<Skill> };

// Record / Function

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

console.log({coder});
