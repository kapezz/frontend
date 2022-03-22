/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

/*
function consoleNdigit(n) {
    for (let i = 1; i <= n; i = i + 1) {
        console.log(i);
    }
}*/
let out = document.getElementById('out');

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

/*if (numberOfFilms === null) {
    prompt('Сколько фильмов вы уже посмотрели2?', '');
}*/
if (numberOfFilms === '' || numberOfFilms === null || numberOfFilms.length > 50 ) {
        let a = prompt('Сколько фильмов вы уже посмотрели?', '');
        console.log(a);
}
/*
if (numberOfFilms.length > 50) {
    prompt('Сколько фильмов вы уже посмотрели4?', '');
}*/

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
}
else if (numberOfFilms > 10 && numberOfFilms < 30) {
    alert('Вы классический зритель');
}
else if (numberOfFilms > 30) {
    alert('Вы киноман');
}
else {
    alert('Произошла ошибка');
}



    
/*for (let i = numberOfFilms; i === true; i++) {
         
         console.log(numberOfFilms);   
    }*/



/*
if (numberOfFilms === null) {
    prompt('Сколько фильмов вы уже посмотрели3?', '');
}*


/*
for (let i = 0; numberOfFilms === null; i++) {
    console.log(i);
}*/

/*
if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
}
else if (numberOfFilms > 10 && numberOfFilms < 30) {
    alert('Вы классический зритель');
}
else if (numberOfFilms > 30) {
    alert('Вы киноман');
}
else {
    alert('Произошла ошибка');
};

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



console.log(personalMovieDB);*/
