// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function frankenSplice(arr1, arr2, n) {

let new_array = []
let new_array2 = []

new_array = arr1.slice(0) 
new_array2 = arr2.splice(n, arr1)


console.log(new_array)
console.log(new_array2)

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);




