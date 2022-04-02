
function deepCount2(a, rez) {
      for (let i = 0; i < a.length; i++ ) {
          rez[0]++;
          if ( Array.isArray(a[i]) ) {
              deepCount2(a[i], rez);
          }
      }
      return rez[0];
  }
  
  function deepCount(a) {
      let rez = [0];
      for (let i = 0; i < a.length; i++ ) {
          rez[0]++;
          if ( Array.isArray(a[i]) ) {
              deepCount2(a[i], rez);
          }
      }
      return rez[0];
  }