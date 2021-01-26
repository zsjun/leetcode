/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const rescur = (l1, l2, newHead) => {
  if (l1 && l2) {
    let val;
    if (l1.val <= l2.val) {
      val = l1.val;
      l1 = l1.next;
    } else {
      val = l2.val;
      l2 = l2.next;
    }
    const temp = new ListNode(val);
    newHead.next = temp;
    newHead = temp;
    rescur(l1, l2, newHead);
  }
  if (l1 && !l2) {
    newHead.next = l1;
  }
  if (l2 && !l1) {
    newHead.next = l2;
  }
};

export default (l1, l2) => {
  let newHead = new ListNode();
  let head = newHead;
  rescur(l1, l2, newHead);
  return head.next;
};

// Runtime: 84 ms, faster than 92.56% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.8 MB, less than 10.66% of JavaScript online submissions for Merge Two Sorted Lists.

export default (l1, l2) => {
  let newHead = new ListNode();
  let head = newHead;
  while (l1 && l2) {
    let val;
    if (l1.val <= l2.val) {
      val = l1.val;
      l1 = l1.next;
    } else {
      val = l2.val;
      l2 = l2.next;
    }
    const temp = new ListNode(val);
    newHead.next = temp;
    newHead = temp;
  }
  if (l1) {
    newHead.next = l1;
  }
  if (l2) {
    newHead.next = l2;
  }
  return head.next;
};
