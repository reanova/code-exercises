module.exports.dbl = function dbl(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(num)) {
                reject("bad number!");
            } else {
                resolve(num * 2);
            }
        }, 2000);
    });
};
