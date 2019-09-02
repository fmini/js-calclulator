// Create the variables
const myForm = document.querySelector('#my-form');
const operatorInput = document.querySelector('#operator');
const numOneInput = document.querySelector('#numOne');
const numTwoInput = document.querySelector('#numTwo');

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {
  e.preventDefault();
  switch (operatorInput.value){

    case '+':
      document.querySelector('#answer').placeholder = Number(numOneInput.value) + Number(numTwoInput.value);
      break; 

    case '-':
      document.querySelector('#answer').placeholder = Number(numOneInput.value) - Number(numTwoInput.value);
      break;

    case '*':
      document.querySelector('#answer').placeholder = Number(numOneInput.value) * Number(numTwoInput.value);
      break;

    case '/':
      document.querySelector('#answer').placeholder = Number(numOneInput.value) / Number(numTwoInput.value);
      break;

    case '%':
      document.querySelector('#answer').placeholder = Number(numOneInput.value) % Number(numTwoInput.value);
      break;
    default:
      console.log('Something Went Wrong');
  }     
}