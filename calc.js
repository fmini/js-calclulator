// Add an event listenter for clicking calculate
let calcButton = document.getElementById('calculate');

let AnswerButton = document.getElementById('answer');

//Define the function when we click
calcButton.onclick = function(){
  AnswerButton.value = "numOne + numTwo"
  console.log(numOne);
}
numOne = document.getElementById('numOne'.value);
numTwo = document.getElementById('numTwo'.value);
operator = document.getElementById('operator'.value);

console.log('Hello World');
console.log(numOne);
console.log(document.querySelector('#numOne'.value));