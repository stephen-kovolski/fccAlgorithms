/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]


*/



function mergeTwoLists(list1, list2) {
    let new_array = [];
    new_array.push(list1, list2)
    let flat_array = new_array.flat(1)
    flat_array.sort(function(a, b) {return a - b;})
    console.log(flat_array);
};

mergeTwoLists([1,2,4], [1,3,4])
mergeTwoLists([9, 13, 56], [17, 97, 35])
mergeTwoLists([54, -1, 2], [104, 67, 0])
mergeTwoLists([0, 2, 1], [0, 1, 3])
mergeTwoLists([], [])
mergeTwoLists([], [0])