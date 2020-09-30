module.exports = function reverse (n) {
    if (n < 0) {
        return +String(n).slice(1).split('').reverse().join('');
    }
    else return +String(n).split('').reverse().join('');
}
