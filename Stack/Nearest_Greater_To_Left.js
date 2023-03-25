/*
    Write a program to nearest greater element to left of an array


    Input Format:
    4        :  Size of the array
    1 3 2 4  :  array itself

    Output :
    3 4 4 -1
*/

function runProgram(input) {
  input = input.trim().split('\n');
  let size = +input[0];
  let arr = input[1].split(' ').map(Number);
  let resultArr = [];
  let s = [];

  for (let i = size - 1; i >= 0; i--) {
    if (s.length === 0) {
      resultArr.push(-1);
    } else if (s.length > 0 && s[s.length - 1] > arr[i]) {
      resultArr.push(s[s.length - 1]);
    } else if (s.length > 0 && s[s.length - 1] <= arr[i]) {
      while (s.length > 0 && s[s.length - 1] <= arr[i]) {
        s.pop();
      }
      if (s.length === 0) {
        resultArr.push(-1);
      } else {
        resultArr.push(s[s.length - 1]);
      }
    }
    s.push(arr[i]);
  }

  console.log(resultArr.reverse());
}

function runProgramBruteForce(input) {
  input = input.trim().split('\n');
  let size = +input[0];
  let arr = input[1].split(' ').map(Number);
  let resultArr = [];

  for (let i = 0; i < size; i++) {
    let next = -1;
    for (let j = i + 1; j < size; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    resultArr.push(next);
  }

  console.log(resultArr);
}

runProgramBruteForce(`4
  1 3 2 4`);
