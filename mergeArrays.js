// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted. 
// Write an algorithm to merge the 2 arrays into a single array, 
// which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeSort() {
    return arr1.concat(arr2).sort(function (a,b) {
        return a-b;
    })
}

arr1 = [1, 3, 6, 8, 11]
arr2  = [2, 3, 5, 8, 9, 10]
console.log(mergeSort(arr1,arr2))