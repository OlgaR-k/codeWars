function formatDuration (seconds) {
    let s = seconds;
    let rez = '';

    let year = 0;
    let d = 0;
    let h = 0;
    let m = 0;

    let arr = [];

    if ( s == 0 ) {
        return 'now';
    }

    let num = 365 * 24 * 60 * 60;
    if ( (s / num) >= 1 ) {
        year = Math.floor(s / num );
        s -= year * num; 
        rez = '' + year + ( year == 1 ? ' year' : ' years');
        arr.push(rez);
    }
    num /= 365;

    if ( (s / num) >= 1 ) {
        d = Math.floor(s / num );
        s -= d * num; 
        rez = '' + d + ( d == 1 ? ' day' : ' days');
        arr.push(rez);
    }
    num /= 24;
    if ( (s / num ) >= 1 ) {
        h = Math.floor(s / num );
        s -= h * num; 
        rez = '' + h + ( h == 1 ? ' hour' : ' hours');
        arr.push(rez);
    }
    num /= 60;
    if ( (s / num ) >= 1 ) {
        m = Math.floor(s / num );
        s -= m * num; 
        rez = '' + m + ( m == 1 ? ' minute' : ' minutes');
        arr.push(rez);
    }
    num /= 60;

    if ( s >= 1 ) {
        rez = '' + s + ( s == 1 ? ' second' : ' seconds');
        arr.push(rez);
    }

    rez = '';
    for  (let i = 0; i < arr.length; i++ ) {
        if (rez !== '') {
            if ( i == (arr.length - 1)) {
                rez += ' and ';
            } else {
                rez += ', ';
            }
        }

        rez += arr[i];
    }
    return rez;
}
  


  console.log(
    formatDuration(3662)
  );