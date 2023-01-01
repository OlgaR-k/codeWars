
function sentence(List) {
  let order = [];
  List.forEach( (item) => {
      order.push( Object.entries(item)[0][0] );
  } );
  order.sort( (a, b) => a - b );

  let result = new Array(order.length);

  List.forEach( (item) => {
    let [key, value] = [Object.keys(item)[0], Object.values(item)[0]];
    result[order.findIndex( val => val == key)] = value;
  } );

  return result.join(' ');
}

const List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
 ];

console.log(sentence(List));