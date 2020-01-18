// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm
// to remove all numbers less than 5 from the array. DO NOT 
// use Array's built-in .filter() method here; write the 
// algorithm from scratch.

function filter(arr){
    const newArr = [];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

arr1 = [1,3,4,6,7,8,11]
arr2 = [3,6,8,9,0,2,3,1,6,4,9,12]
console.log(arr1, filter(arr1))
console.log(arr2, filter(arr2))