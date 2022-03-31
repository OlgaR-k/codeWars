function isIsogram(str){

    let obj = {};

    for ( let i = 0; i < str.length; i++ ) {
        obj[str[i].toLowerCase()] = 0;
    }
    for ( let i = 0; i < str.length; i++ ) {
        obj[str[i].toLowerCase()]++;
    }
    for ( let key in obj ) {
        if ( obj[key] > 1 ) {
            return false;
        }
    }
    return true;
}

console.log( isIsogram( 'aba' ) );