var array = [[465, 46846, 606, 13765],[75646, 1861, 189865, 165163],[3268, 6532, 6852, 452],[545321, 6521, 3125, 5965],[68532, 3126, 8632, 41267],[7458, 95258, 25632, 9824]];

for (var i = 0; i < array.length; i++){
    var newArray = 0;
    for (var j = 0; j < array[i].length; j++){
        if (array[i][j] > newArray){
            newArray = array[i][j]
        }
        }
        console.log("The longest number in each array", i, "is", newArray);
}





