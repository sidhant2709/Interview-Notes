function outerFunction() {
  let outerVariable = 'I am an outer variable';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();

console.log(myClosure);

/*


*/
