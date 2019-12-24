export {};// file has been declared as a module and have its own scope.

const username = "Folau";

let game: string;

game = "basketball";


function print(game: string, points: number){
    console.log(`Billy got ${points}  points in his last ${game} game`);
}

let points: number = 3;

print(game, points);

// arrow funtion

let double = (numb) => {return numb*2;};

console.log("double 8: "+double(8));