function fizzBuzz(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 3 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else {
        console.log("fizz");
      }
    } else if (i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else {
        console.log("buzz");
      }
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(16);
