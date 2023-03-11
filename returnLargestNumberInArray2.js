/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/



function largestOfFour(arr) {

    let new_array = []; //the arary Im going to put the biggest numbers into

    for (let i = 0; i < arr.length; i++){  //outer loop
        let bigNum = 1;  //new variable to hold big numbers from arr[i]
        for (let j = 0; j < arr[i].length; j++){ //inner loop
             if (arr[i][j] > bigNum){ //
                 bigNum = arr[i][j]
             }
            
            new_array[i] = bigNum;


            }
        }

        console.log(new_array)

        
    }

  
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


