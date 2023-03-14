/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/



function largestOfFour(arr) {

    let new_array = []; //the arary Im going to put the biggest numbers into

    for (let i = 0; i < arr.length; i++){  //outer loop. Allows the next loop (j) to go insode each of the 4 arrays
        let bigNum = 0;  //new variable to hold big numbers from arr[i]
        for (let j = 0; j < arr[i].length; j++){ //inner loop that goes insode of the four arrays
             if (arr[i][j] > bigNum){ //the number j is on, if thats bigger that the number in bigNum than bigNum becomes equal to j.  And so on until it finds the niggest number in the array.
                 bigNum = arr[i][j] //mentioned in notes directly above
             }
            
            new_array[i] = bigNum; //this number iterates through and puts all of the numbers that were in bigNum into newArray


            }
        }

        console.log(new_array)

        
    }

  
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


