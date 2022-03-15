// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let word1 = 
mutation(["alien", "line"]);


/*

1 split up both words
2 get the length of both words
3 loopr through the smallest word
4 loop through the biggest word
5 compare the smallest word to the letters in the biggest word
6 console log true or false


let word2 = arr[1].toLowerCase().split("");
    let totalCharacters = word2.length;
    let counter = 0


    for (let i = 0; i < word2.length; i++) {
        if (arr[0].toLowerCase().includes(word2[i])) {
            // console.log("Bingo");
            counter++;
        }
        
    }
    // console.log(totalCharacters);
    // console.log(counter);

    if (counter == totalCharacters) {
        console.log(true);
        // return true
    }else {
        console.log(false)
        // return false
    }

//   return arr;
}





*/
