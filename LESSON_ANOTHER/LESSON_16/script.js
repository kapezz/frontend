"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);   
    let num = 10;
    console.log(num);
}

showFirstMessage('всем приветики');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(15, 99));
console.log(calc(5, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// эту функцию можно вызвать только после ее объявления (остальные нет)то есть присвоив какую то переменную 
let logger = function() {
    console.log('privet');
};

logger();

// Самый новый вид синтаксиса (без ретурн) и выполняется без вызова функции один раз 
const calc1 = (a, b) => a + b;

// Если много выражений то уже использовать нужно скобки и ретурн
const cals2 = (a, b) => {
    console.log('1');
    return a + b;
};