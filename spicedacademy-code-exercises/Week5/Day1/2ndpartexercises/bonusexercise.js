/*Write a function that returns an array containing all the values passed to it
in the order in which they are passed. When the spread operator is used on this array, 
the values in the array should be produced in reverse order.

*/

function makeWeirdArray(...val) {
    const weirdArr = {
        [Symbol.iterator]: function* () {
            const objectLength = Object.keys(this).length - 1;
            for (let i = objectLength; i >= 0; i--) {
                yield this[i];
            }
        },
    };

    let i = 0;
    for (const check of val) {
        weirdArr[i] = check;
        i++;
    }
    return weirdArr;
}

const a = makeWeirdArray(10, 20, 30);

a[0];

a[1];

[...a];
