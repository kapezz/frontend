'use strict';
// функции это отдельный тип данных и они могут выполняться - всегда возвращает результат (если не знает то неопределенность)
// называться не может с цифры
/*console.log();*/ // функция вывода информации в консоль 

/*
function issRound(a) {
    const mod = a1 % 10; //получение остатка от деления
    mod === 0; //операция сравнения с числом ноль
}

console.log( issRound ); 
*/


function mod(a, b) {
    return a % b;
} 
console.log( mod(6, 4) );

function getStrLength(s) {
    return s.lengts;
}

console.log( getStrLength ('hello') );

/*
function isRound() {// тут тело функции
    let a;
    const b = 8;
    a = 12;
    return b + a; // если нет ретурна то будет андефайнд - неопределенность, она всегда что то возвращает
   // return a - b; //может быть много возвратов, но после первого она не будет выполняться (игнорироваться будет)
}

console.log( isRound() ); // результат работы функции 
*/