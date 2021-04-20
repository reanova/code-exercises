/*Paste the poorly formatted code below into a file and add line breaks and indentation to make it readable.

function fizzbuzz() { for (var i = 1; i <= 100; i++) { if (i % 3 == 0) {
if (i % 5 == 0) { console.log('fizzbuzz'); } else { console.log('fizz'); } } else {
if (i % 5 == 0) { console.log('buzz'); } else { console.log(i);}}}}
*/

fizzbuzz();

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("fizzbuzz");
            } else {
                console.log("fizz");
            }
        } else {
            if (i % 5 == 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
}
