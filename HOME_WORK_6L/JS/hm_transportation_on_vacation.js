function rentalCarCost(d) {
    let rentAcar = 40; 
    let diskount1 = 50;
    let diskount2 = 20;

    if (d >= 3 && d < 7 ) {
        return d * rentAcar - diskount2;
    }
    else if (d >= 1 && d < 3) {
        return d * rentAcar;
    }
    else {
        return d * rentAcar - diskount1;
    }
  }


  console.log(rentalCarCost(15));



