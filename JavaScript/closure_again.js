var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var squareNum = square(n);
var squareNum2 = square(3);

const obj = {
  n: undefined,
  square: square,
  squareNum: undefined,
  squareNum2: undefined,
};

console.log(obj);

// function outerFunction() {
//   let outerVariable = 'I am an outer variable';

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const myClosure = outerFunction();

// console.log(myClosure);
