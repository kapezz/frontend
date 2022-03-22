/*function even_or_odd(number) {
    if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
  console.log(evenOrOdd(1));
  console.log(evenOrOdd(2));
  console.log(evenOrOdd(13));
  console.log(evenOrOdd(16));  */
  
 
  /*2
  function makeNegative(num) {
    if (num => 0) {
      return Math.sign;
    } 
  else {
    return num;
  }
}
  console.log(makeNegative(5));
*/


//Jenny's secret message
/*
function greet(name){
    if (name === "Johnny") 
         return "Hello, my love!";
     else {
         return "Hello, " + name + "!";
     }  
 }


  console.log(greet("Kevin"));
*/

/*expected love and not love - true 

function lovefunc(flower1, flower2){
    if (flower1 % 2 != 0 && flower2 % 2 === 0,
        flower2 % 2 != 0 && flower1 % 2 === 0
        ) {
        return "love";
    } else {
        return "not love";
    }
  }
  function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 === 0) {
        return "not love";
    } else {
        return "love";
    }
  }

  console.log(lovefunc(10, 15));*/


  let priceRentACar = 40;
  let discount7d = 50;
  let discount4d = 20;
  let days = 8;
  let price = priceRentACar * days;

  function rentalCarCost(days) {  
        if (days >= 7) {
          return price - discount7d;}  
          else  /*(days >= 4) {
          return price - discount4d;}*/
            return "test";
        }

  console.log(rentalCarCost("8"));