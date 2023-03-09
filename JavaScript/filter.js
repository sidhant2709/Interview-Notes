// unique values in array
let arr = [1, 4, 10, 'sid', 1, 'sid', 4, 3, 2];

let unique = arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});

console.log(unique);

// unique values in array using set
var ab = [1, 1, 2];

console.log([...new Set(ab)]);

// unique values in 2d array

var e = [
  [1, 2],
  [1, 2],
  [2, 3],
  [4, 5],
  [6, 7],
];

var f = [];

for (var x = 0; x < e.length; x++) {
  f[x] = e[x][1];
}
// f: [2,2,3,5,7]

var g = e.filter(function (elem, pos) {
  return f.indexOf(elem[1]) == pos;
});

console.log(g);

// duplicate values in an array

let arr1 = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];

let duplicateValues = arr1.filter(
  (curr, index, arr) => arr.indexOf(curr) !== index
);

console.log('duplicateValues', duplicateValues);
