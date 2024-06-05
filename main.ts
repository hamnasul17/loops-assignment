// question 1

const myWork :  {name: string;  status: boolean} [] = []

for(let i=1; i<=10; i++){
    let lesson = {
     name: `Lesson ${i}`,
     status: i % 2 === 1 ? true : false 
     
    }
    if (i %2 ===1){
        console.log("The lesson is odd");
    }
    else{
        console.log("The lesson is even");
        
    }
    myWork.push(lesson)
    
};
console.log(myWork);

//question 2

let maxVal= 6;
const randomNumber = Math.floor(Math.random() * maxVal) +1
console.log(randomNumber);
let numberArray : number[] = [1,2,3,4,5,6]
let indexNumber: number = 0;
while(indexNumber< numberArray.length){
    let currentGuess = numberArray[indexNumber]
    if(currentGuess === randomNumber){
        console.log("Congratulation you guessed the correct number");
        
    }
    else if (currentGuess < randomNumber){
    console.log("Your Guess is too low!");
    
    }
    else {
        console.log("Your Guess is too high!");
        
    }
    indexNumber++;
    
};

//question 3

let  counter: number = 0;
let step: number = 1;

do {
    console.log(counter);
    counter += step
    
}while(counter < 100);

// question 4

let myObject = {
    item1: "TV",
    item2: "Mobile",
    item3: "Necklace",
}
for(let X in myObject){
    console.log(`${X}: ${myObject[X]}`);
    
};

// question 5

const myArray : number[]= []
for(let i=1; i<= 10; i++){
    myArray.push(i)
    
}
console.log(myArray);
for(let i=0; i<myArray.length; i++){
    console.log(`Index:  ${i}, Value: ${myArray[i]}`);
    
}
for(let x of myArray ){
    console.log(`Value: ${x}`);
    
};

