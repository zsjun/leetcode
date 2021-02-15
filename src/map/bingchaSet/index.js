class BingchaSet {
  constructor(n) {
    this.rank = [];
    this.father = [];
    for (let i = 0; i < n; i++) {
      this.rank[i] = 1;
      this.father[i] = i;
    }
  }
  find(i) {
    if (this.father[i] === i) {
      return i;
    }
    const parent = this.find(this.father[i]);
    this.father[i] = parent;
    return parent;
  }
  union(i, j) {
    const parentI = this.find(i);
    const parentJ = this.find(j);
    if (this.rank[parentI] <= this.rank[parentJ]) {
      this.father[parentI] = parentJ;
    } else {
      this.father[parentJ] = parentI;
    }
    if (this.rank[parentI] === this.rank[parentJ] && parentI != parentI) {
      this.rank[parentJ]++;
    }
  }
}
export default BingchaSet;
