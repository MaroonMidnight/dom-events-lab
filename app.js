/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let num1 = null
let num2 = null
let operator = null
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {

    if (event.target.classList.contains('number')) {
       if(num1 === null) 
        display.innerText += event.target.innerText //display + button we press
       if (num1 != null) {
        display.innerText += event.target.innerText 
    }
    } 
    if (event.target.classList.contains('operator')) {
        

        if (num1 === null) {
            num1 = display.innerText //Everything in display is num1
            operator = event.target.innerText
            display.innerText = '' //gets rid of previous number to show next number
        }
    }

     if (event.target.innerText === '=') {
        num2 = display.innerText // everything before = after num1 (operator)
        let sum 

        if (operator === '*') {
            console.log(num1, num2,)
           sum = Number(num1) * Number(num2)
          
        }
        if(operator === '/') {
            sum = Number(num1) / Number(num2)  
        }
        if(operator === '-') {
            sum = Number(num1) - Number(num2)
        }
        if(operator === '+') {
            sum = Number(num1) + Number(num2)
        }
        display.innerText = sum
        console.log(num1,num2,sum)
    }
    if(event.target.innerText === 'C') {
        display.innerText = ''
        num1 = null
        num2 = null
        console.log(num1,num2)
    }
    
  });
  
/*-------------------------------- Functions --------------------------------*/


