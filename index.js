function myLanguages(results) {
  const MIN = 60;
  let ball = [];

  for ( let key in results ) {
      if (results[key] >= MIN ) {
          ball.push( results[key] );
      }
  }
  ball.sort( (a, b) => b - a );

  let rez = Array(ball.length);
  for ( let key in results ) {
      if (results[key] >= MIN ) {
         let index = ball.findIndex( item => item == results[key] );
         rez[index] = key;
      }
  }
  return rez;
}