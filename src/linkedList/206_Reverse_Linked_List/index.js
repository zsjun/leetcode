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
export default (head) => {
  let arr = [];
  let point = head;
  while (point !== null) {
    arr.push(point.val);
    point = point.next;
  }
  point = head;
  let len = arr.length - 1;
  while (point !== null && len >= 0) {
    point.val = arr[len];
    point = point.next;
    len--;
  }
  return head;
};
