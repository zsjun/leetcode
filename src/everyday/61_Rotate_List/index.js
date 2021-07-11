/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

export default (head, k) => {
  if (!head) return null;
  if (!head.next) {
    return head;
  }
  while (k > 0) {
    let headnext = head.next;
    let last = headnext;
    let pre = head;
    while (last.next !== null) {
      pre = last;
      last = last.next;
    }
    pre.next = null;
    last.next = head;
    head = last;
    k--;
    // console.log(head)
  }
  return head;
};
