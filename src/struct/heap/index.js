class Heap {
  constructor(initArr = []) {
    this.arr = initArr;
    const len = this.arr.length - 1;
    this.buildHeap(len);
    console.log(112, this.arr);
  }
  // 最大值
  top() {
    return this.arr[0];
  }
  // push进来一个数
  push(val) {
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  }
  // push进来一个数
  pop(val) {
    const res = this.arr[0];
    const res1 = this.arr.pop();
    this.arr[0] = res1;
    const len = this.arr.length - 1;
    this.sink(0);
    return res;
  }
  swap(i, j) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  buildHeap(pos) {
    for (let j = Math.floor(pos / 2); j >= 0; j--) {
      this.sink(j);
    }
  }

  // 上浮
  swim(pos) {
    while (pos >= 1 && this.arr[Math.floor(pos / 2)] < this.arr[pos]) {
      this.swap(Math.floor(pos / 2), pos);
      pos = Math.floor(pos / 2);
    }
  }
  // 下沉
  sink(pos) {
    const len = this.arr.length;
    while (2 * pos < len) {
      let i = 2 * pos;
      if (i < len && this.arr[i] < this.arr[i + 1]) {
        ++i;
      }
      if (this.arr[pos] >= this.arr[i]) break;
      this.swap(pos, i);
      pos = i;
    }
  }
}
export default Heap;
