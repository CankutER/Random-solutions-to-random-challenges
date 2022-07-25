function lonelyinteger(a) {
  // Write your code here
  let lonely = a.reduce((acc, curr, i) => {
    let found = a.filter((item, x) => item === curr && x !== i);
    console.log(found);
    if (found.length === 0) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return lonely[0];
}

console.log(lonelyinteger([0, 0, 1, 2, 1]));
