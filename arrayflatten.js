const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, [8, 9, 10, [11, 12]]],
];

function flatten(arr) {
  let control = true;
  let temp = [];
  arr.forEach((item) => {
    temp.push(...item);
  });
  while (control) {
    temp.forEach((item, i) => {
      if (Array.isArray(item)) {
        temp.splice(temp.indexOf(item), 1, ...item);
      } else if (i === temp.length - 1) {
        control = false;
      }
    });
  }
  return temp;
}
console.log(flatten(arr));
