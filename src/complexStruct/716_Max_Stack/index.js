class MaxStack {
  constructor() {
    this.normalStack = [];
    this.maxStack = [];
  }

  //O(1);
  push(val) {
    this.normalStack.push(val);
    const len = this.maxStack.length;
    if (len === 0 || (len > 0 && val >= this.maxStack[len - 1])) {
      this.maxStack.push(val);
    } else {
      this.maxStack.push(this.maxStack[len - 1]);
    }
  }
  //O(1);
  pop() {
    this.maxStack.pop();
    return this.normalStack.pop();
  }
  //O(1);
  // 获取当前最顶上的元素，但是不删除
  top() {
    if (this.normalStack.length > 0) {
      return this.normalStack[this.normalStack.length - 1];
    } else {
      return -1;
    }
  }
  //O(1);
  // 获取最大的stack中max元素
  peekMax() {
    if (this.maxStack.length > 0) {
      return this.maxStack[this.maxStack.length - 1];
    } else {
      return -1;
    }
  }
  //O(n);
  // 删除最大的元素
  popMax() {
    const res = this.peekMax();
    const temp = [];
    while (this.top() !== res) {
      const normalEle = this.normalStack.pop();
      temp.shift(normalEle);
      this.maxStack.pop();
    }
    this.pop();
    for (let val of temp) {
      this.push(val);
    }
    return res;
  }
}
export default MaxStack;
