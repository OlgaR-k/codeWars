
function nbDig(n, d) {
  let rez = [];

  for ( let i = 0; i <= n; i++ ) {
    rez.push( Math.pow(i, 2) );
  }
  let count = 0;
  for ( let i = 0; i <= rez.length; i++ ) {
    String(rez[i]).split('').forEach( (item) => {
      if (item == d) {
        ++count;
      } 
    });
    
  }
  return count;
}

console.log( nbDig(10, 1) );