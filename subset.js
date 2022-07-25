const arr = [1, 2, 3, 4];

function subsetsOf(arr) {
  let subsets;
  subsets = arr.reduce((acc, curr) => {
    if (acc.length === 0) {
      acc.push([curr]);
      return acc;
    } else {
      let addition = acc.map((item) => {
        let unit = [...item];
        unit[unit.length] = curr;
        return unit;
      });

      acc.push(...addition);

      acc[acc.length] = [curr];
      return acc;
    }
    // console.log(acc);
  }, []);

  subsets.unshift([]);
  return subsets;
}

// subsetsOf(arr);
console.log(subsetsOf(arr));
