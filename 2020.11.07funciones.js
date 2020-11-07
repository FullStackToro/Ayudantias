function estadistica(x) {
    var avg = 0;
    var max = x[0];
    var min = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < min) {
            min = x[i];
        } else if (x[i] > max) {
            max = x[i]
        }
        avg = avg + x[i];
    }
    avg = avg / x.length;
    var op = [min, avg, max]
    return op
}

function batman() {
    var str = ''; // este string no aporta nada
    for (var i = 0; i < 8; i++) {
        str = str + 'nana';
    }
    str = str + 'BATMAN!!!!';
    console.log(str);
}
function cuentaRegresiva() {
    for (var i = 3000; i >= 100; i -= 3) {
        console.log(i);
    }
}