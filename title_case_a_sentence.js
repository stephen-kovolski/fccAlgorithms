// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

let str_split;  //variable that'll be used to split up the parameter
let uppercase_string;  //Once looped through, the first letter of every word will be stored here
let lowercase_string;  //Once looped through, the lowercase letters of every word will be stored here
let new_string;  //the complete final string pushed to here and will be stored here


function titleCase(str) {  
    str_split = str.split(" ")  //splits the str on the spaces in order to keep all of the words together
    
    for (let i = 0; i < str_split.length; i++){  //for loop that loops through the str
        uppercase_string = str_split[i][0].toUpperCase()  //making all of the first letters ([i][0]) uppercase with toUpperCase() and storing them in the variable
        lowercase_string = str_split[i].substring(1).toLowerCase() //using substring to start at the 1st index and capture the rest of the string and turn them to lowercase using toLowerCase()and storing them in the variable
        new_string += uppercase_string + lowercase_string;  /*the variables uppercase_string and lowercase_string are inside the loop and also have the iterator in them [i].  
        This matters because it adds the letters in order to the new_string variable. It starts with [i][0], [0] being the first index of every word in the string and continues with the rest of the word using substring()
        Once the loop is complete, and everything has been added to new_string.  THe algorithm is complete.
        */
        
    }


        console.log(new_string); //logging it to the console

  }
  
  titleCase("I'm a little tea pot");
  


