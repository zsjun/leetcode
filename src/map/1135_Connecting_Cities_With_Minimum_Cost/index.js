class Uf {
  constructor(n) {
    this.parent = new Array(n + 1).fill(0);
    this.size = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
    this.count = n;
  }
  // 发现父元素，连成一个链表
  find(i) {
    if (i !== this.parent[i]) {
      this.parent[i] = this.find(this.parent[i]);
    }
    return this.parent[i];
  }
  // 连接起来
  union(i, j) {
    // 判断谁是谁的父元素,谁的比重大谁就是父元素
    if (this.size[i] > this.size[j]) {
      this.parent[j] = i;
      this.size[i] += this.size[j];
    } else {
      this.parent[i] = j;
      this.size[j] += this.size[i];
    }

    this.count--;
  }
}
export default (n, connections) => {
  connections.sort((a, b) => a[2] - b[2]);
  let res = 0;
  const uf = new Uf(n);
  for (let conn of connections) {
    const a = conn[0];
    const b = conn[1];
    const cost = conn[2];
    const pa = uf.find(a);
    const pb = uf.find(b);

    if (pa !== pb) {
      uf.union(pa, pb);
      res += cost;
    }

    if (uf.count === 1) return res;
  }
  return -1;
};
