/*
Remove duplicates from a sorted list.
EXAMPLE 1
Input: head = [1,1,2]
Output: [1,2]

EXAMPLE 2
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

let first_num =[];

function deleteDuplicates(param) {

    for (let i = 0; i < param.length; i++){
        for (let j = 1; j < param.length; j++){
            first_num.push(param)
            if (param[i] % param[j] == 0){
                console.log(first_num);
            }
        }
    }
    console.log(first_num);

};


deleteDuplicates([1,1,2,3,3])
// deleteDuplicates([1,1,2])
// deleteDuplicates([6, 23, 75, 234, 76, 23, 0, 54, 23, 96, 23])