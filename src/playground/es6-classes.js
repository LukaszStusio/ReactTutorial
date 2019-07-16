// setup a constructor to take name and age (default to 0)
// getDescription - output: Andrew Mead is is 26 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}.`;
    }
    // I did on my own an if printing year || years depending on age :)
    getDescription() {
        return `${this.name} is ${this.age} ${this.age > 1 ? 'years' : 'year'} old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
        // return 'testing';
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

// next task:
// traveler > extends> Person
// Add a support for homeLocation
// Override getGreeting
// output:
// Hi. I'm Lukasz Stusio. I'm visiting from Poznań.
// Hi. I'm Lukasz Stusio.

const me = new Student('Lukasz Stusio', 37, 'philosophy');
const newMe = new Traveler('Lukasz Stusio', 37, 'Poznań');
console.log(newMe.getGreeting());
console.log(newMe.getDescription());


const other = new Student();
const newOther = new Traveler();
console.log(other.getGreeting());
console.log(other.getDescription());