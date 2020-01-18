// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces
//  between words or letters. A solution that developers can use to solve
// this problem is to replace any spaces with a %20. Write a method that
// takes in a string and replaces all its empty spaces with a %20. Your
// algorithm can only make 1 pass through the string. Examples of input 
// and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function urlify(string) {
    const arr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            arr[i] = '%20'
        }
        else {
            arr[i] = string[i]
        }
    }
    return arr.join('')
}

function newString(string) {
    const arr = string.split('')
    return arr.join('%20')
}

console.log(urlify('tauhida parveen'))
console.log(urlify("www.thinkful.com /tauh ida parv een"))
console.log(newString('tauhida parveen'))
console.log(newString("www.thinkful.com /tauh ida parv een"))