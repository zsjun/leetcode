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

const reverLisk = (head) => {
  if (!head) return null;
  if (!head.next) return head;
  let last = head.next;
  const nowHead = reverLisk(head.next);
  head.next = null;
  last.next = head;
  return nowHead;
};
export default (head, k) => {
  if (!head) return null;
  if (!head.next || k === 0) {
    return head;
  }
  head = reverLisk(head);
  // console.log(head);
  let curHead = head;
  let last = head;
  k--;
  while (k > 0) {
    last = last.next;
    k--;
    // console.log(123, k,last)
    if (!last && k >= 0) {
      // console.log(112)
      last = head;
    }
  }
  // console.log(last)
  let lastHead = last ? last.next : null;
  if (last) {
    last.next = null;
  }

  let curLast = last;
  // console.log(curHead)
  head = reverLisk(curHead);
  //  console.log(head)
  lastHead = reverLisk(lastHead);
  curHead.next = lastHead;
  return head;
};
