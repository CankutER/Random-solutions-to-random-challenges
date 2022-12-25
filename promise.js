class myPromise {
  constructor(clbk) {
    this.status = "pending";
    if (typeof clbk === "function") {
      this.func = function () {
        return clbk(this.resolve.bind(this), this.reject.bind(this));
      };
      this.func();
    }
  }
  resolve(item) {
    const resPromise = new myPromise();
    resPromise.result = item;
    this.result = item;
    this.status = "fulfilled";
    return resPromise;
  }
  reject(item) {
    const resPromise = new myPromise();
    resPromise.result = item;
    this.status = "rejected";
    return resPromise;
  }
  then(clbk) {
    const resPromise = new myPromise();
    let self = this;
    let interval = setInterval(() => {
      if (self.status === "fulfilled") {
        resPromise.result = clbk(self.result);
        clearInterval(interval);
      }
    }, 1);
    return resPromise;
  }
}

const p1 = new myPromise((res, rej) => {
  setTimeout(() => {
    res(5);
  }, 1000);
});

p1.then((value) => console.log(value));
