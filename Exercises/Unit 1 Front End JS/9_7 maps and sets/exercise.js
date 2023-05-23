/* Quick Question #1 */
new Set([1,1,2,2,3,4]) // [1,2,3,4]
/* Quick Question #2 */
x= [...new Set("referee")].join("") // ref
/* Quick Question #3 */
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*answer
{   
    [1,2,3]: true
    [1,2,3]: false
}

*/

/*

hasDuplicate

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
*/

const hasDuplicate = arr => new Set(arr).size !== arr.length

/*
vowelCount

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
*/

const vowelCount = str => {
    let target = str.toLowerCase()
    let result = new Map()
    let vowels = 'aeiou'
    target.split("").forEach( char => {
        if (vowels.includes(char)) {
            if (result.has(char)) result.set(char, result.get(char) + 1)
            else result.set(char, 1)
        }
    })
    return result
}