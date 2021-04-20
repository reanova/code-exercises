/* Write a function that takes two arrays as arguments and 
returns a new array containing all of the items in the two arrays passed to it. 
This function should leave the original arrays unchanged
contain no loops of any kind. That includes for, for...in, for...of, while, or do...while
not call slice or any other method on the two arrays passed to it
not call push or concat on any array in any way */

let bothArrays = (arr1, arr2) => [...arr1, ...arr2];

bothArrays(["yala", "hola", 2], [34, "bueno", "mucho"]);
