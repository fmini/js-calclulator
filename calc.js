// Create the variables
const myForm = document.querySelector('#my-form');
const operatorInput = document.querySelector('#operator');
const numOneInput = document.querySelector('#numOne');
const numTwoInput = document.querySelector('#numTwo');

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {
  e.preventDefault();
  console.log(operatorInput.value);
  switch (operatorInput.value){

    case '+':
      console.log(parseInt(numOneInput.value) + parseInt(numTwoInput.value));
      break; 

    case '-':
          console.log(parseInt(numOneInput.value) - parseInt(numTwoInput.value));
      break;

    case '*':
      console.log(parseInt(numOneInput.value) * parseInt(numTwoInput.value));
      break;

    case '/':
      console.log(parseInt(numOneInput.value) / parseInt(numTwoInput.value));
      break;

    case '%':
      console.log(parseInt(numOneInput.value) % parseInt(numTwoInput.value));
      break;
    default:
      console.log('matched no cases');
  }     
}