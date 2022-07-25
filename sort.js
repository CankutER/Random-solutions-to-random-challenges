const numbers = [6312, 6543, 6578, 123, 9231, 6523];
function sort(array) {
  let sortedArray = [];
  function lowest(array) {
    for (i = 0; i < array.length; i++) {
      for (z = 0; z < array.length; z++) {
        let bool = array[i] <= array[z];
        if (!bool) {
          break;
        }
        if (z === array.length - 1) {
          sortedArray.push(array[i]);
          array.splice(i, 1);
        }
      }
    }
  }
  while (array.length !== 0) {
    lowest(array);
  }
  return sortedArray;
}

console.log(sort(numbers));
