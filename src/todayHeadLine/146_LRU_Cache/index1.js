class DLinkedNode {
  constructor(key, val, preNode, nextNode) {
    this.key = key;
    this.value = val;
    this.pre = preNode ? preNode : null;
    this.next = nextNode ? nextNode : null;
  }
}
class DLinkedList {
  constructor() {
    this.head = new DLinkedNode("head", 0);
    this.tail = new DLinkedNode("tail", 0);
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.length = 0;
  }
  addNode(node) {
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
  }
  removeNode(node) {
    const pre = node.pre;
    const next = node.next;
    pre.next = next;
    next.pre = pre;
  }
  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }
  popTail() {
    const res = this.tail.pre;
    this.removeNode(res);
    return res;
  }
}
// Runtime: 184 ms, faster than 92.78% of JavaScript online submissions for LRU Cache.
// Memory Usage: 51.7 MB, less than 41.93% of JavaScript online submissions for LRU Cache.
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.max = capacity;
  this.map = new Map();
  this.dLinkedList = new DLinkedList();
  // this.head = new DLinkedNode("head", 0);
  // this.tail = new DLinkedNode("tail", 0);
  // this.head.next = this.tail;
  // this.tail.pre = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key);
  if (!node) {
    return -1;
  }
  // move the accessed node to the head;
  this.dLinkedList.moveToHead(node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.map.get(key);

  if (!node) {
    const newNode = new DLinkedNode(key, value);
    if (this.map.size >= this.max) {
      const tail = this.dLinkedList.popTail();
      this.map.delete(tail.key);
    }
    this.map.set(key, newNode);
    this.dLinkedList.addNode(newNode);
  } else {
    node.value = value;
    this.dLinkedList.moveToHead(node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
