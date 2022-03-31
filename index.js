
function getNum32bit(num) {
    let rez = 0;
    let a = num;

    while ( a !== 0 ) {
        rez += a % 2;
        a = ( a - a % 2) / 2;
    }
}

function sortByBiy(arr) {
    return arr.sort(function (a, b) {
        let a1 = getNum32bit(a);
        let b1 = getNum32bit(b);
        if ( a1 = b1 ) {
            return a - b;
        }
        return a1 - b1;
    });
}

let arr = [7, 6, 15, 8];

// sortByBiy(arr);

console.log(arr);
