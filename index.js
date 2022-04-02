
var runLengthEncoding = function (str) {
      if ( str.length == 0 ) {
          return [];
      }
      let rez = [];
      let last = str[0];
      let arr = [1, str[0]];
  
      for (let i = 1; i < str.length; i++) {
          if (last !== str[i]) {
              last = str[i];
              rez.push(arr);
              arr = [0];
          }
          arr[0]++;
          arr[1] = str[i];
      }
      rez.push(arr);
  
      return rez;
  }