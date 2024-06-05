// question 1
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1 ? true : false
    };
    if (i % 2 === 1) {
        console.log("The lesson is odd");
    }
    else {
        console.log("The lesson is even");
    }
    myWork.push(lesson);
}
;
console.log(myWork);
//question 2
var maxVal = 6;
var randomNumber = Math.floor(Math.random() * maxVal) + 1;
console.log(randomNumber);
var numberArray = [1, 2, 3, 4, 5, 6];
var indexNumber = 0;
while (indexNumber < numberArray.length) {
    var currentGuess = numberArray[indexNumber];
    if (currentGuess === randomNumber) {
        console.log("Congratulation 🎉 you guessed the correct number");
    }
    else if (currentGuess < randomNumber) {
        console.log("Your Guess is too low! 😔");
    }
    else {
        console.log("Your Guess is too high! 😄");
    }
    indexNumber++;
}
;
//question 3
var counter = 0;
var step = 1;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
// question 4
var myObject = {
    item1: "Watch⌚",
    item2: "T shirt👕",
    item3: "Shoes🩰",
};
for (var X in myObject) {
    console.log("".concat(X, ": ").concat(myObject[X]));
}
;
// question 5
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("Index:  ".concat(i, ", Value: ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var x = myArray_1[_i];
    console.log("Value: ".concat(x));
}
;
