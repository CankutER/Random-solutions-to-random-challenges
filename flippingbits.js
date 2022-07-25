function flippingBits(n) {
  // Write your code here
  let bitOfN = "";
  for (let i = 31; i >= 0; i--) {
    if (n - 2 ** i >= 0) {
      bitOfN += "1";
      n -= 2 ** i;
    } else {
      bitOfN += "0";
    }
  }
  console.log(bitOfN);
  let bitOfNFlipped = "";
  for (let i = 0; i <= 31; i++) {
    if (bitOfN[i] === "0") {
      bitOfNFlipped += "1";
    } else if (bitOfN[i] === "1") {
      bitOfNFlipped += "0";
    }
  }
  console.log(bitOfNFlipped);
  let result = 0;
  for (let i = 0; i <= 31; i++) {
    if (bitOfNFlipped[i] === "1") {
      result += 2 ** (31 - i);
    }
  }
  console.log(result);
  return result;
}

console.log(flippingBits(9));
