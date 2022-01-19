// 根据构造函数原型生成一个对象，
// 执行
function myNew(fn, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  const res = fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}

Array.prototype.myReduce = function (callback, initVal) {
  // 有初始值把初始值作为accumulator,否则将数组第一个数作为accumulator
  const accumulator = initVal ? initVal : this[0];
  // 存储源数组
  let _this = this;
  for (let i = initVal ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, _this);
  }
  return accumulator;
};

function mInstanceof(cur, target) {
  // 先解决不能满足条件的情况
  if (typeof cur !== "object" || cur == null) return false;

  let p = cur.prototype;
  while (true) {
    // 在原型链上判断
    if (p === target.prototype) return true;
    if (p.prototype === null) return false;
    p = Object.getPrototypeOf(p);
  }
}
