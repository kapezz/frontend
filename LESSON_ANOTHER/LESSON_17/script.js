"use strict"

const str = "test";
console.log(str.length); //длинна 

const arr =[1, 2, 3];
console.log(arr.length);


console.log(str.toUpperCase()); // превращает буквы в большие 
console.log(str.toLowerCase()); // превращает буквы в большие 

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit'));

const logg = 'Hello World';
console.log(logg.slice(6,11)); //вырезание 

console.log(logg.substring(6, 11)); // тоже вырезание - аругменты старт и энд (не поддерживает отрицательные значения) 
console.log(logg.substr(6, 3)); // начало с кокай буквы начинаем вырезение и второе значение количество символов

const num = 12.2;
console.log(Math.round(num)); // округление 

const test = "13.2px";
console.log(parseInt(test)); // переводит число в другую систему изчисления (вытаскивает по сути целое число)
console.log(parseFloat(test)); // взять число и вернуть десятичное значение (дробное)
