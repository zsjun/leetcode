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
var swapPairs = function (head) {
  if (!head) return null;
  const dummy = head.next;
  if (!dummy) return head;
  let pre = new ListNode(0);
  pre.next = head;
  let cur = head;
  while (cur && cur.next) {
    pre.next = cur.next;
    if (cur.next) {
      cur.next = cur.next.next;
    }
    if (pre.next) {
      pre.next.next = cur;
    }
    pre = cur;

    cur = cur.next;
  }
  return dummy;
};
