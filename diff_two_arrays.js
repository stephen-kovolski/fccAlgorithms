/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/


function diffArray(arr1, arr2) {
    const newArr = [];
    let firstArr = arr1;
    let secondArr = arr2;

    for (let i = 0; i < firstArr.length; i++){
        for (let j = 0; j < secondArr.length; j++){

            if (firstArr[i] != secondArr[j]){
                
            }

        }
    }
    

  }


  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  //diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  
