var addTwoNumbers = function (l1, l2) {
  let max = l1.length >= l2.length ? l1 : l2;
  let min = l1.length < l2.length ? l1 : l2;

  let result = [];
  let leftOver = 0;
  for (let i = 0; i < max.length; i++) {
    let total = max[i] + (min[i] ? min[i] : 0) + leftOver;

    result.push(total % 10);
    leftOver = (total - (total % 10)) / 10;

    if (i === max.length - 1 && leftOver > 0) {
      result.push(leftOver);
    }
  }
  console.log(result);
  return result;
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
addTwoNumbers([0], [0]);
addTwoNumbers([2, 4, 3], [5, 6, 4]);
