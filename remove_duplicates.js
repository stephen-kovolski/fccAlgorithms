/*
Remove duplicates from a sorted list.
EXAMPLE 1
Input: head = [1,1,2]
Output: [1,2]

EXAMPLE 2
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/



function deleteDuplicates(param) {

    let first_number;
    let second_number;

    for (let i = 0; i < param.length; i++){
        for (let j = 0; j < param.length; j++){
            first_number.push(param[i])
            second_number.push(param[j])

        }

        console.log(second_number);

    }
    
};


deleteDuplicates([1,1,2,3,3])
deleteDuplicates([1,1,2])
deleteDuplicates([6, 23, 75, 234, 76, 23, 0, 54, 23, 96, 23])