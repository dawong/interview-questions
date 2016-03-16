// -----Original Implementation-----
var sum = 0;

$.ajax({
  success: function(result) {
    sum += 25;
  }
});

$.ajax({
  success: function(result) {
    sum += 50;
  }
});

setTimeout(function() {console.log(sum);}, 1000);


// -----New implementation-----
var sum = 0;
var sum1;
var sum2;

$.ajax({
 success: function(result) {
   sum1 = 100;
   if (sum2 !== undefined) {
    printSum(sum1, sum2);
   }
 }
});

$.ajax({
  success: function(result) {
    sum2 = 1;
    if (sum1 !== undefined) {
      printSum(sum1, sum2);
    }
  }
});

function printSum(num1, num2) {
  var total = num1 + num2;
  console.log("sum is: " + total);
  return total;
}
