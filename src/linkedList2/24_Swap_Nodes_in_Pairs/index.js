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
const rescrue = (pre, head) => {
  if (head) {
    let next = head.next;
    if (!next) {
      return;
    }
    pre.next = next;
    head.next = next.next;
    next.next = head;
    rescrue(head, head.next);
  }
};
// Runtime: 76 ms, faster than 79.57% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 39 MB, less than 12.95% of JavaScript online submissions for Swap Nodes in Pairs.
export default (head) => {
  if (!head || !head.next) {
    return head;
  }
  let pre = new ListNode();
  const currentHead = pre;

  rescrue(pre, head);
  return pre.next;
};
