// create a function that can account for these cases:
//
// - add(1)(3)(5)() returns 9
// - add(1)(2)(3)(4)(5)() returns 15
//

function add(x) {
  var sum = 0;

  function chain(y) {
    if (y !== undefined) {
      sum += y;
      return chain;
    } else {
      return sum;
    }
  }

  return chain(x);
}

console.log(add(1)(3)(5)());
console.log(add(1)(2)(3)(4)(5)());
