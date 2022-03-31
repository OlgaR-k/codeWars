
function duplicateEncode(word){
    let obj = {};
    for ( let i = 0; i < word.length; i++ ) {
        obj[word[i].toLowerCase()] = 0;
    } 
    for ( let i = 0; i < word.length; i++ ) {
        obj[word[i].toLowerCase()]++;
    }
    // console.log(obj);
    let rez = '';
    for ( let i = 0; i < word.length; i++ ) {
        let letter = word[i].toLowerCase();

        if ( obj[letter] == 1 ) {
            rez += '(';
        } else {
            rez += ')';
        }
    }
    return rez;
}
                                                //    ))())))()))
console.log( duplicateEncode( 'llaJlllwSll' ) );  //  ))(()))(())