console.log("Hello World");

const Options = {
	Rock: Symbol("rock"),
	Paper: Symbol("paper"),
	Scissors: Symbol("scissors"),
};

let compChoice;

for (let i=0; i < 10; i++){
    compChoice = getComputerChoice();
    console.log(compChoice);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(){
    let randomInteger = randomIntFromInterval(1,3);
    switch (randomInteger){
        case 1:
            return Options.Paper;
        case 2:
            return Options.Rock;
        case 3:
            return Options.Scissors;
        default:
            throw "Something went wrong in random selection";
    }
    
}