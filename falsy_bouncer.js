/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
*/

function bouncer(arr) {
let newArray = [];
    for (let i =0; i < arr.length; i++){
        if (arr[i] == '' || arr[i] == false || arr[i] == 0 || arr[i] == null || arr[i] == undefined || arr[i] == NaN){
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
}
  
bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);