var isEven = function (x) {
// returns true if x is a multiple of 2.
console.log(x);
return (x % 2 == 0) ? true : false;
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
numbers.every(isEven);
numbers.forEach(function(x){
console.log((x % 2 == 0));
});
