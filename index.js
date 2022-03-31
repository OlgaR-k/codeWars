
function solution(number){
  if (number < 0) {
      return 0;
  }
  let arr = [];
  for (let i = number - 1; i >= 3; i-- ) {
      if ( (i % 3 == 0) || (i % 5 == 0 )) {
          arr.push(i);
      }
  }

//   console.log(arr);
  return arr.reduce( (sum, item) => sum+= item, 0 )
}

console.log( solution( 10 ) );  //  2