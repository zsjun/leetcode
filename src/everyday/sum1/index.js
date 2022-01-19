function add(n) {
  var addNext = function (x) {
    return add(n + x);
  };

  addNext.valueOf = function () {
    return n;
  };

  return addNext;
}

console.log(add(1)(2)(3).valueOf()); //true
console.log(add(1)(2)(3)(4)); //true
