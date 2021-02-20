/**
 * Initialize your data structure here.
 */
class Bucket {
  constructor(val, preBucket, nextBucket) {
    this.count = val;
    this.next = nextBucket || null;
    this.pre = preBucket || null;
    this.keySet = new Set();
  }
}
var AllOne = function () {
  // key2count map
  this.key2countMap = new Map();
  // sameCount map, 每个count对应是一个双向的Bucket链表
  this.sameCountBucketMap = new Map();
  // this.head 指向最小的val
  this.head = new Bucket(Number.MIN_VALUE);
  // this.tail 指向最大的val
  this.tail = new Bucket(Number.MAX_VALUE);
  this.head.next = this.tail;
  this.tail.pre = this.head;
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  // 如果存在，则把它加入到相同count的链表中去
  if (this.key2countMap.has(key)) {
    this.changeKey(key, 1);
  } else {
    this.key2countMap.set(key, 1);
    if (this.head.next.count !== 1) {
      this.addBucketAfter(new Bucket(1), this.head);
    }
    this.head.next.keySet.add(key);
    this.sameCountBucketMap.set(1, this.head.next);
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  if (this.key2countMap.has(key)) {
    const count = this.key2countMap.get(key);
    if (count === 1) {
      this.key2countMap.delete(key);
      this.removeKeyFromBucket(this.sameCountBucketMap.get(count), key);
    } else {
      this.changeKey(key, -1);
    }
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  return this.tail.pre === this.head ? "" : this.tail.pre.keySet[Symbol.iterator]().next().value;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  return this.head.next === this.tail ? "" : this.head.next.keySet[Symbol.iterator]().next().value;
};
// 把相同count的Bucket加入到sameCountBucketMap
AllOne.prototype.changeKey = function (key, offset) {
  // 首先修改原来存在key值
  const count = this.key2countMap.get(key);
  this.key2countMap.set(key, count + offset);
  const curBucket = this.sameCountBucketMap.get(count);
  let newBucket;
  if (this.sameCountBucketMap.has(count + offset)) {
    newBucket = this.sameCountBucketMap.get(count + offset);
  } else {
    // add new Bucket
    newBucket = new Bucket(count + offset);
    this.sameCountBucketMap.set(count + offset, newBucket);
    this.addBucketAfter(newBucket, offset === 1 ? curBucket : curBucket.pre);
  }
  newBucket.keySet.add(key);
  this.removeKeyFromBucket(curBucket, key);
};
AllOne.prototype.removeKeyFromBucket = function (bucket, key) {
  bucket.keySet.delete(key);
  if (bucket.keySet.size === 0) {
    this.removeBucketFromList(bucket);
    this.sameCountBucketMap.delete(bucket.count);
  }
};
AllOne.prototype.removeBucketFromList = function (bucket) {
  bucket.pre.next = bucket.next;
  bucket.next.pre = bucket.pre;
  bucket.next = null;
  bucket.pre = null;
};
AllOne.prototype.addBucketAfter = function (newBucket, preBucket) {
  newBucket.pre = preBucket;
  newBucket.next = preBucket.next;
  preBucket.next.pre = newBucket;
  preBucket.next = newBucket;
};
/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
