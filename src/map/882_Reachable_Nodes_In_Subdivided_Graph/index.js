/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
class Heap {
  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  compare(i, j) {
    if (!this.heap[j]) return false;
    return this.heap[i][1] > this.heap[j][1];
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(num) {
    this.heap.push(num);
    let idx = this.length - 1;
    let parent = (idx - 1) >> 1;
    // 如果没有到达终点
    while (idx !== 0 && this.compare(parent, idx)) {
      this.swap(parent, idx);
      idx = parent;
      parent = (idx - 1) >> 1;
    }
  }

  remove() {
    if (this.length === 1) return this.heap.pop();
    let res = this.heap[0],
      idx = 0,
      left = 1 | (idx << 1),
      right = (1 + idx) << 1;
    this.heap[0] = this.heap.pop();
    while (this.compare(idx, left) || this.compare(idx, right)) {
      if (this.compare(left, right)) {
        this.swap(idx, right);
        idx = right;
      } else {
        this.swap(idx, left);
        idx = left;
      }
      left = 1 | (idx << 1);
      right = (1 + idx) << 1;
    }
    return res;
  }
}
export default (edges, maxMoves, n) => {
  let res = 0;
  const priorityQueue = new Heap();
  const visited = new Array(n).fill(0);
  const graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < edges.length; i++) {
    // 把两者的距离push进去
    graph[edges[i][0]].push([edges[i][1], edges[i][2]]);
    graph[edges[i][1]].push([edges[i][0], edges[i][2]]);
  }
  distance[0] = 0;
  priorityQueue.insert([0, distance[0]]);

  while (priorityQueue.length != 0) {
    let cur = priorityQueue.remove();
    const curNode = cur[0];
    if (visited[curNode] === 1) continue;
    if (distance[curNode] <= maxMoves) res++;
    visited[curNode] = 1;
     for (let i of graph[curNode]) {
      if (distance[i[0]] > distance[curNode] + i[1] + 1) {
        distance[i[0]] = distance[curNode] + i[1] + 1;
        priorityQueue.insert([i[0], distance[i[0]]]);
      }
    }
  }
  for (let i = 0; i < edges.length; i++) {
    const a = maxMoves - distance[edges[i][0]] >= 0 ? maxMoves - distance[edges[i][0]] : 0;
    const b = maxMoves - distance[edges[i][1]] >= 0 ? maxMoves - distance[edges[i][1]] : 0;
    res += Math.min(edges[i][2], a + b);
  }
  return res;
};
