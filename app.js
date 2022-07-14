// // select items
const display= document.querySelector('.num-display')
 const button= document.querySelector('.keys')

 let firstValue = "";
 let secondValue = "";
 let symbol = "";

 // add Even listner

 button.addEventListener('click',function(e){
  const keyValue= e.target
  buttonValue= keyValue.innerHTML
  const btnIsSymbol = keyValue.classList.contains("operator");
  const special = keyValue.dataset.id;

   if (firstValue && btnIsSymbol && !special) {
     symbol = buttonValue;
   } else if (!symbol) {
     firstValue += buttonValue;
   } else if (symbol && !special) {
     secondValue += buttonValue;
   }
  
  if(!special){
   display.textContent += buttonValue;
  }


 function calculate() {
  let result;
   if (symbol == "+") {
     result = parseFloat(firstValue) + parseFloat(secondValue);
   } else if (symbol == "-") {
      result = result = parseFloat(firstValue) - parseFloat(secondValue);
   } else if (symbol == "*") {
      result = result = parseFloat(firstValue) * parseFloat(secondValue);
   } else if (symbol == "÷") {
      result = result = parseFloat(firstValue) / parseFloat(secondValue);
   } else if (symbol == "%") {
      result = result = parseFloat(firstValue) % parseFloat(secondValue);
   }
   return result
 }
  
  if (special == "equals") {
   console.log(calculate());
  }
 })



 