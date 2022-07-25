function plusMinus(arr) {
  const result = arr.reduce(
    (acc, curr) => {
      if (curr > 0) {
        acc.positive = acc.positive + 1;
      } else if (curr === 0) {
        acc.zero = acc.zero + 1;
      } else {
        acc.negative = acc.negative + 1;
      }
      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );
  let total = 0;
  for (let value in result) {
    total += result[value];
  }
  console.log(result);
  console.log((result.positive / total).toFixed(6));
  console.log((result.negative / total).toFixed(6));
  console.log((result.zero / total).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
