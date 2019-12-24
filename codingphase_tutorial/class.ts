export {};// file has been declared as a module and have its own scope.

/*
TypeScript is object oriented JavaScript. TypeScript supports object-oriented programming features like classes, 
interfaces, etc. A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object. 
Typescript gives built in support for this concept called class. JavaScript ES5 or earlier didn’t support classes. 
Typescript gets this feature from ES6.
*/

class Customer{
    name: string;    
    state: string;
    age: number;
    city: string;

    constructor(name?: string, state?: string, age?: number, city?: string){
        this.name = name;
        this.age = age;
        this.state = state;
        this.city = city;
    }

    public toString() : void{
        console.log(`name: ${this.name}, age: ${this.age}, state: ${this.state}, city: ${this.city}`);
    }

    public incrementAge(): number{
        return (++this.age);
    }
}

let biker = new Customer("John","CA",45,"Hawthorne");

console.log(biker);

biker.toString();

console.log("age 1 year later: "+biker.incrementAge());


class Doctor{

    constructor(public name?: string, public state?: string, private npi?: number){
        this.name = name;
        this.npi = npi;
        this.state = state;
    }

    public toString() : void{
        console.log(`name: ${this.name}, state: ${this.state}, npi: ${this.npi}`);
    }

    set Npi(npi: number){
        this.npi = npi;
    }

    get Npi(){
        return this.npi;
    }
}

let john = new Doctor("John","CA",45234234);
john.name = "Laulau";
john.Npi = 23423423;
john.toString();

console.log("npi: "+john.Npi);