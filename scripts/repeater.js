// create an optimal function 'repeat' that takes in a string and number inputs. Return a
// a string that is the original string duplicated n times. For example repeat('b', 3) gives 'bbb',
// repeat('abc', 2) gives 'abcabc'

function repeat(str, n) {
  var counter = 2;
  var retval = str;

  while(counter < n) {
    retval += retval;
    counter *= 2;
  }
  counter /= 2;

  for (var i=0; i<n-counter; i++) {
  retval += str;
  }
  
  return retval;
}

console.log(repeat('art', 6));
console.log(repeat('tree', 3));
