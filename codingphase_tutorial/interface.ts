import {User} from "./models/User";

/*
An interface is a syntactical contract that an entity should conform to. 
In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface. 
Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. 
It often helps in providing a standard structure that the deriving classes would follow.

*/
interface UserData{
    name: string;
    state: string;
    age: number;
    city: string;
    welcome();
}

let welcome = (user: UserData) => {
    console.log(`Welcome ${user.name}. You are from ${user.city}, ${user.state} and you are ${user.age} years old.`);
}

let folau = {
    name: "Folau",
    state: "Inglewood",
    age: 33,
    city: "Lennox",
    welcome() {
        
    }
}

welcome(folau);

let biker = new User();
biker.age = 45;
biker.state = "CA";
biker.city = "Hawthorne";
biker.name = "John";

welcome(biker);

class Manager extends User{

    department: string;

}

let kinga = new Manager();
kinga.name = "Kinga";
kinga.age = 6;
kinga.state = "CA";
kinga.city = "Hawthorne";


export {};// file has been declared as a module and have its own scope.