// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function frankenSplice(arr1, arr2, n) {
    let array_one = arr2;
    array_one.splice(n, 0, arr1);
    
    console.log(array_one)
}
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

















  //new_array = [];
    
  //    for (let i = 0; i < arr1.length; i++){
  //         arr2.splice(n, 0, arr1[i])
  //    }
  //     console.log(arr2)




