/*  LEETCODE

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

*/


 
function lengthOfLastWord(s) {

    let new_string= s.split(" ");
    let second_string = new_string.slice(new_string.length-1)
    
    for (let i = 0; i < second_string.length; i++){
        
        console.log(second_string[i].length);

    } 
    
};


lengthOfLastWord("Hello World")
lengthOfLastWord("fweoijfwe osiju wgfwoij fjewo;iuw;e jfeiwo;iju hjerihgoerhgpoigh sidghf")
lengthOfLastWord("asd kl;awetj ojt;poj joj")
lengthOfLastWord("sdlkgn oipoe i")
lengthOfLastWord("neoirhg")
lengthOfLastWord("gioerhg oirhgwie")
lengthOfLastWord("gnm;oweirjgtpwi;egtrehj geroihwoiuhwoiuhowiur")

