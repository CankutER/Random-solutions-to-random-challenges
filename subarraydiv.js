// *******this is non-contiguous size k sub-array with a given sum(works but exceeds callstack on large inputs)

// function subArrDiv(s, d, m) {
//   let subArrs = s.reduce(
//     (acc, curr) => {
//       let addition = acc.map((subArr) => {
//         let temp = [...subArr];
//         temp.push(curr);
//         return temp;
//       });

//       acc.push(...addition);

//       return acc;
//     },
//     [[]]
//   );
//   let result = subArrs
//     .filter((item) => item.length === m)
//     .filter((item) => {
//       if (
//         item.reduce((acc, curr) => {
//           acc += curr;
//           return acc;
//         }, 0) === d
//       ) {
//         return item;
//       }
//     });
//   let set = new Set();
//   result.forEach((element, i) => {
//     result[i] = String(element);
//     set.add(result[i]);
//   });
//   return set.size;
// }

// console.log(
//   subArrDiv([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
// );

// *******END OF

// this is contiguous variant
function birthday(s, d, m) {
  // Write your code here
  let subArrs = s.reduce((acc, curr, i) => {
    if (i + m <= s.length) {
      let temp = [];
      for (let n = i; n < i + m; n++) {
        temp.push(s[n]);
      }
      acc.push(temp);
    }
    return acc;
  }, []);

  let result = subArrs.filter((subArr) => {
    if (subArr.reduce((acc, curr) => (acc += curr), 0) === d) {
      return subArr;
    }
  });
  return result.length;
}

console.log(birthday([1, 2, 3, 4], 3, 2));
