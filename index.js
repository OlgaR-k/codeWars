function dataReverse(data) {
  let rez = [];

  while (data.length > 0) {
       rez.unshift(...data.splice(0, 8));
   }
   console.log(rez);
  return rez;

}

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]);