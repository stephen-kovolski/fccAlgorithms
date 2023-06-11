// Find the Average of Numbers in an Array


function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    if (arr.length === 0) return 0;
    return sum / arr.length;
  }


  console.log(findAverage([1, 3, 5, 7, 9]));
  console.log(findAverage([30, 40, 50, 60, 70]));