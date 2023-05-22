/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    let newString;

    newString = str.toLowerCase()
    //newString.split(" ")


    console.log(newString.join("-"));
  }
  
  spinalCase('This Is Spinal Tap');
//   spinalCase("thisIsSpinalTap")
//   spinalCase("The_Andy_Griffith_Show")