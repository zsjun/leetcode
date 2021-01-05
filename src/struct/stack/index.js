class Stack {
  constructor() {
    this.arr = [];
  }
  push(x) {
    this.arr.push(x);
  }
  pop() {
    return this.arr.pop();
  }
}

export default Stack;
