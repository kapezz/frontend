console.log('tasks');

const c = 12; // не целые числа пишуться через точку 12.5

const a = 12.2;
const b = 13.1;

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b );
console.log( a % b );

const s = 'string';   // строка отличается от числа наличием кавычек 
console.log(s); //єкранирование обратный слеш 
const s1 = 'string2';

console.log( s + '' + s );
console.log(`${s} ${s1}`); //в обратных кавычках можно использовать переменные

//булевые только правда или ложь 
const b1 = true;
const v = false;

console.log( b1, typeof b1 );
console.log( v, typeof v ); //typeoff указывает какой тип данных лежит в переменной 


const empty = null; //тип данных, говорит о том что тут лежит 0 - пусто - ничего не лежит 
console.log( typeof empty); //это не object 

let t; //пустая - неопределенность - то есть мы ничего не положили

const bigInt = 123456789456123056n;//большое целое число 
console.log( bigInt );











// положили числа 
/*const a1 = 12;
console.log(a);

const b22 = 8; //не меняется
console.log(b);

let c15 = a1 + b22; // меняется let
console.log(c);
c15 = a  - b;

const d = a - b;
console.log(d);*/