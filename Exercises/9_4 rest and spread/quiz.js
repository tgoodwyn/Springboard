/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/
// Refactor it to use the rest operator & an arrow function:

const filterOutOdds = (...args) => args.filter( arg => arg % 2 === 0)

/*
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator
*/

function findMin(...args) {
  return Math.min(...args)
}

/*
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

function mergeObjects(arg1, arg2) {
  return { ...arg1, ...arg2} 
}

/*
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
*/

function doubleAndReturnArgs(arr1, ...others) {

  return [...arr1, ...others.map( n => n * 2) ]
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let rand = Math.floor(Math.random() * items.length)
  return [...items.slice(0,rand), ...items.slice(rand+1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return {...obj,  [key]: val }
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let newobj = {...obj}
  delete newobj[key]
  return newobj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  return {...obj,  [key]: val }
}