/*
Implement FizzBuzz using a generator function and a for...of loop.

First, write a generator function that yields the numbers between 1 and 100 in order with the following exceptions

If the number is divisible by 3, yield the string "fizz"

If the number is divisible by 5, yield the string "buzz"

If the number is divisible by both 3 and 5, yield the string "fizzbuzz"

Then write a for...of loop that loops through the values yielded by the generator function and logs each one


*/

function* fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                yield "fizzbuzz";
            } else {
                yield "fizz";
            }
        } else {
            if (i % 5 == 0) {
                yield "buzz";
            } else {
                yield i;
            }
        }
    }
}

let humanFly = fizzbuzz();
for (const cramps of humanFly) {
    console.log(cramps);
}
