/*
Write a generator function that expects to be passed an array of values. 
When next is called on the iterator object that this function returns, 
the values in the array should be yielded in reverse order. 
The array that is passed to the generator function should stay in its original order.
*/

function* reverseGenerator(arr) {
    let newArr = [...arr].reverse();
    for (let i = 0; i < newArr.length; i++) {
        yield newArr[i];
    }
}

let testArray = [4, 5, 6, 7];

let iterator = reverseGenerator(testArray);

let check1 = iterator.next();
console.log("round1: ", check1);
let check2 = iterator.next();
console.log("round2: ", check2);
let check3 = iterator.next();
console.log("round3: ", check3);
let check4 = iterator.next();
console.log("round4: ", check4);
