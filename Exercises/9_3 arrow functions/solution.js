function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

// Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = (arr) => arr.map( (val) => val * 2 )
// Refactor the following function to use arrow functions:

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  
const squareAndFindEvens = (numbers) => (numbes).map( n => n ** 2).filter( n => n % 2 == 0)
