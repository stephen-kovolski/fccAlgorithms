// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

let str_split;
let uppercase_string;
let lowercase_string;
let new_string;


function titleCase(str) {
    str_split = str.split(" ")
    
    for (let i = 0; i < str_split.length; i++){
        uppercase_string = str_split[i][0].toUpperCase()
        lowercase_string = str_split[i].substring(1).toLowerCase()
        console.log(uppercase_string);
        console.log(lowercase_string);
        new_string += uppercase_string + lowercase_string;
    }

        console.log(new_string);

  }
  
  titleCase("I'm a little tea pot");


