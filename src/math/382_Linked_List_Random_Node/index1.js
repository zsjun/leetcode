/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
// Runtime: 308 ms, faster than 5.54% of JavaScript online submissions for Linked List Random Node.
// Memory Usage: 50 MB, less than 5.21% of JavaScript online submissions for Linked List Random Node.
var Solution = function (head) {
  // let p = head;
  // this.nums = [];
  // while (p.next) {
  //   this.nums.push(p.next.val);
  //   p = p.next;
  // }
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
//  Runtime: 120 ms, faster than 65.35% of JavaScript online submissions for Linked List Random Node.
//  Memory Usage: 46.3 MB, less than 19.25% of JavaScript online submissions for Linked List Random Node.
Solution.prototype.getRandom = function () {
  // const len = this.nums.length;
  // const i = Math.floor(Math.random() * (len + 1));
  // return this.nums[i];
  let p = this.head;
  let res = p.val;
  for (let i = 1; p != null; i++) {
    p = p.next;
    if (Math.random() <= 1 / (i + 1)) {
      res = p != null ? p.val : res;
    }
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
