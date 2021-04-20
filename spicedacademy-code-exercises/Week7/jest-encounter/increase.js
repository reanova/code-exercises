module.exports.increase = function increase(n) {
    if (isNaN(n) || n <= 0) {
        return "ERROR";
    }
    while (n < 1000) {
        n *= 10;
    }
    return n;
};
