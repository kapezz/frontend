"use strict";

/*задача 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'*/
/*let numberOfFilms;
numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);*/

/*2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false*/

    const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

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


    
    console.log(personalMovieDB);
    