/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const merge = (l1, l2) => {
  let head = new ListNode();
  let p = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  if (l1) {
    p.next = l1;
  }
  if (l2) {
    p.next = l2;
  }
  return head.next;
};
// Runtime: 140 ms, faster than 86.37% of JavaScript online submissions for Sort List.
// Memory Usage: 54.6 MB, less than 37.62% of JavaScript online submissions for Sort List.
const sortList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  let pre;
  let slow = head;
  let fast = head;

  while (fast && fast.next != null) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  pre.next = null;
  let l1 = sortList(head);
  let l2 = sortList(slow);
  return merge(l1, l2);
};

export default sortList;
