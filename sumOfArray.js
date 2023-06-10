function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  console.log(  sumArray([1,2,3,4,5]));
  console.log(  sumArray([10, 15, 22, 99, 36]));
  console.log(  sumArray([400, -5, 16, 9]));
  console.log(  sumArray([5, 4, 3, 2, 1, 1]));