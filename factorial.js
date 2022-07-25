// for (i = 1; i <= 10; i++) {
//   console.log(`Multiplication Table for ${i}`);
//   for (x = 1; x <= 10; x++) {
//     console.log(`${i * x}`);
//   }
// }

function factorial(num) {
  let result;
  if (num == 0 || num == 1) {
    result = 1;
  } else {
    result = num * factorial(num - 1);
  }
  return result;
}
console.log(factorial(4));
