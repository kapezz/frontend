
/*
function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 || flower2 % 2 === 1) {
        return "not love";
    } 
    if (flower2 % 2 === 0 || flower1 % 2 === 1) {
        return "not love";
    }
    else {
        return "love";
    }
  }
console.log(lovefunc(1,4));*/

function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 != 0) {
        return "love";
    } 
    else if (flower1 % 2 != 0 && flower2 % 2 === 0) {
        return "love";
    }
    else {
        return "not love";
    }
  }
console.log(lovefunc(688,680));

