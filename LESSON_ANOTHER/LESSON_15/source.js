
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


