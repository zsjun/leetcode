Object.prototype.bind = function (context, args) {
  // 判断是否为object或者function
  if (typeof context == "object" || typeof context == "function") {
    context = context || window;
  } else {
    // 否则,创建一个空的object
    context = Object.create(null);
  }
  // 将当前函数挂载到context属性上
  context.__fn__ = this;
  // 执行该函数,在这里,因为context调用了该函数,所以该函数的this指向的就是传入的context
  const res = context.__fn__(...args);
  // 删除挂载的属性
  delete context.__fn__;
  return res;
};
