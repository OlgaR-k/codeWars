
function sortMyString(S) {
  let result = new Array(Math.floor(S.length / 2) + S.length % 2);
  result.push(' ');
  for (let i = 0; i < S.length; i++ ) {
    if ( i % 2 === 0) {
      result[i/2] = S[i];
    } else {
      result.push(S[i]);
    }
  }
  return result.join('');
}

console.log(sortMyString("CMAHuNnHNWYW5mL2e9Kfuvj5xAkk7")); 