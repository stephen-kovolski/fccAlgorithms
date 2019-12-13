// function confirmEnding(str, target){

// if (str[str.length - 1] == target){
//   return(true)
//   }else {
//     return(false){
//   }
// }

//   confirmEnding("bastian", "n")
  

function confirmEnding(str, target) {
  const strLastLetters = str.substring(str.length-target.length)
    if (strLastLetters == target) {
      return true;
    } else {
      return false;
    }

}

confirmEnding("Bastian", "n");


