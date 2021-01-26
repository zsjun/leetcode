/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// Runtime: 104 ms, faster than 11.59% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 39.9 MB, less than 91.59% of JavaScript online submissions for Remove Nth Node From End of List.
export default (head, n) => {
  const tempHead = new ListNode();
  tempHead.next = head;
  head = tempHead;

  const copyHead = head;
  let p = head;
  while (n > 0) {
    --n;
    p = p.next;
  }
  while (p && p.next) {
    p = p.next;
    head = head.next;
  }

  const temp = head.next;
  head.next = temp.next;
  return copyHead;
};
