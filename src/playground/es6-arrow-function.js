const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

// challenge
const fullName = 'Java Script';
let firstName;
// if (fullName) {
//     firstName = fullName.split(' ')[0];
// };
// console.log(firstName);

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];

};
// 'Java'
// console.log('Java');
console.log(getFirstName(fullName));

// challenge #2
// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been multiplied
const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiply(multiplyBy) {
        return this.numbers
        .map(n => {return (n*multiplyBy)})
    },
};
console.log(multiplier.numbers + ' multiplied by ' +  + ' is ' + multiplier.multiply(3));