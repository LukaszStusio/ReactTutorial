var nameVar = 'Łukasz';
var nameVar = 'nie Łukasz';
console.log('nameVar', nameVar);

let nameLet = 'Cecyl';
nameLet = 'nieCecyl';
console.log('nameLet', nameLet);

const nameConst = 'Krzychu';
console.log('nameConst', nameConst);

// block scoping

const fullName = 'Łukasz Stusio';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);