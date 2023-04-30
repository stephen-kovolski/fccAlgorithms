//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//let newArray = []


function sumAll(arr) {

    largerNumber = Math.max(arr[0], arr[1])
    smallerNumber = Math.min(arr[0], arr[1])
    let finalArray = [];

    for (let i = smallerNumber; i <= largerNumber; i++){
            finalArray.push(i)
    }
    console.log(finalArray);
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 50]);
sumAll([7, 14]);
sumAll([30, 10]);
