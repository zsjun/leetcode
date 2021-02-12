var reachableNodes = function (edges, M, N) {
  let res = 0,
    heap = new Heap(),
    state = new Array(N).fill(0),
    graph = Array.from(new Array(N), () => []),
    distance = new Array(N).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push([edges[i][1], edges[i][2]]);
    graph[edges[i][1]].push([edges[i][0], edges[i][2]]);
  }
  distance[0] = 0;
  heap.insert([0, distance[0]]);
  while (heap.length != 0) {
    let t = heap.remove();
    if (state[t[0]] == 1) continue;
    if (distance[t[0]] <= M) res++;
    state[t[0]] = 1;
    for (let i of graph[t[0]]) {
      if (distance[i[0]] > distance[t[0]] + i[1] + 1) {
        distance[i[0]] = distance[t[0]] + i[1] + 1;
        heap.insert([i[0], distance[i[0]]]);
      }
    }
  }
  for (let i = 0; i < edges.length; i++) {
    let a = M - distance[edges[i][0]] >= 0 ? M - distance[edges[i][0]] : 0,
      b = M - distance[edges[i][1]] >= 0 ? M - distance[edges[i][1]] : 0;
    res += Math.min(edges[i][2], a + b);
  }
  return res;
};

class Heap {
  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  compare(a, b) {
    if (this.heap[b] == undefined) return false;
    return this.heap[a][1] > this.heap[b][1];
  }

  exchange(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(num) {
    this.heap.push(num);
    let idx = this.length - 1,
      parent = (idx - 1) >> 1;
    while (idx != 0 && this.compare(parent, idx)) {
      this.exchange(parent, idx);
      idx = parent;
      parent = (idx - 1) >> 1;
    }
  }

  remove() {
    if (this.length == 1) return this.heap.pop();
    let res = this.heap[0],
      idx = 0,
      left = 1 | (idx << 1),
      right = (1 + idx) << 1;
    this.heap[0] = this.heap.pop();
    while (this.compare(idx, left) || this.compare(idx, right)) {
      if (this.compare(left, right)) {
        this.exchange(idx, right);
        idx = right;
      } else {
        this.exchange(idx, left);
        idx = left;
      }
      left = 1 | (idx << 1);
      right = (1 + idx) << 1;
    }
    return res;
  }
}
export default reachableNodes;
