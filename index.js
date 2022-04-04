function unluckyDays(year){
    let rez = 0;
    for ( let y = 0; y <= 11; y++ ) {
        if ( ( new Date(year, y, 13)).getDay() == 5 ) {
            rez++;
        }
    }
    return rez;
}


  console.log(
    unluckyDays(2015)
  );