function myReduce(clbk, init) {
  for (let i = 0; i < this.length; i++) {
    // let curr = this[i];
    init = clbk(init, this[i]);
  }
  return init;
}

Array.prototype.myReduce = myReduce;

let arr = [1, 2, 3, 4];

let result = arr.myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log(result);
// class challenge
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}
