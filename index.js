function recycle(array) {
      const typeMaterial = ['paper', 'glass', 'organic', 'plastic'];
  
      const rez = {
          [typeMaterial[0]]: [],
          [typeMaterial[1]]: [],
          [typeMaterial[2]]: [],
          [typeMaterial[3]]: [],
      }
  
      let arrmaterial = ['material', 'secondMaterial']
      for (let i = 0; i < array.length; i++) {
          let obj = array[i];
          for (let k = 0; k < arrmaterial.length; k++) {
              if (obj[arrmaterial[k]]) {
                  rez[obj[arrmaterial[k]]].push(obj['type'])
              }
          }
      }
  
      let arr = [];
      for ( let i = 0; i < typeMaterial.length; i++ ) {
          arr.push( rez[typeMaterial[i]] );
      }
      return arr;
  }