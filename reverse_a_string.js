// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function reverseString(str) {

  let new_array = [];
  
  for (let i = str.length-1; i >= 0; i--){
    new_array.push(str[i])
  }
  //console.log(str.substring(str.length, str[0]));
  console.log(new_array)


}

reverseString("hello");
reverseString("goodbye");
reverseString("g'day");
reverseString("top o the mornin");
reverseString("hi");