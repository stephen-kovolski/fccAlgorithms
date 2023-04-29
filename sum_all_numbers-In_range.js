//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//let newArray = []

let largerNumber;
let smallerNumber;

function sumAll(arr) {

    largerNumber = Math.max(arr)
    smallerNumber = Math.min(arr)

    console.log(largerNumber, typeof(smallerNumber));

}

sumAll([1, 4]);
//sumAll([4, 1]);
