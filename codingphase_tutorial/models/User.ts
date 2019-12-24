
interface UserData{
    name: string;
    state: string;
    age: number;
    city: string;
    welcome();
}

export class User implements UserData{
    
    name: string;    
    state: string;
    age: number;
    city: string;

    welcome() {
        console.log("welcome "+this.name);
    }
}