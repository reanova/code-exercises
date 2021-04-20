module.exports = function fn(val) {
    if (typeof arguments[0] == "string") {
        let arr = val.split("");
        let reverseArr = arr.reverse();
        let newval = reverseArr.join("");
        return newval;
    } else if (Array.isArray(arguments[0])) {
        let arr = [];
        for (var i = 0; i < arguments[0].length; i++) {
            arr.push(fn(arguments[0][i]));
        }
        return arr;
    }
    return null;
};
