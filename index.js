
function nthFibo(n) {
    let a1 = 0;
    let a2 = 1;

    for ( let i = 1; i < n; i++ ) {
        [a1, a2] = [a2, a1 + a2];
    }
    return a1;
}

console.log( nthFibo( 12 ) );  //  2