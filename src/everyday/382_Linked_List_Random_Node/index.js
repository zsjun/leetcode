/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
  this.count = 0;
  let cur = head;
  while (cur) {
    this.count++;
    cur = cur.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const count = Math.floor(Math.random() * this.count);
  let cur = this.head;
  while (count > 0) {
    count--;
    cur = cur.next;
  }
  return cur.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
