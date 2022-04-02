// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let newString = "";
    let words = str.split(" ");

    let upperCaseFirstLetter;
    let remainingLetters;

    for (let i = 0; i < words.length; i++){
        upperCaseFirstLetter = words[i][0].toUpperCase();
        remainingLetters = words[i].substring(1);

        newString += upperCaseFirstLetter+remainingLetters+" ";
    }

    console.log(newString)
    return str;
}

titleCase("I'm a little tea pot");

//get back to this one
