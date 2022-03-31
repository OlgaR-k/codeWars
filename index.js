
function duplicateEncode(word){
 let str = word.toLowerCase();
 let arr = str.split('');
 let arr2 = arr.map( function(item, index, arr_) {
    let j = arr_.indexOf(item);
    let k = arr_.lastIndexOf(item);
    return j == k ? '(' : ')';
 });
 return arr2.join('');

}
                                                //    ))())))()))
console.log( duplicateEncode( 'llaJlllwSll' ) );  //  ))(()))(())