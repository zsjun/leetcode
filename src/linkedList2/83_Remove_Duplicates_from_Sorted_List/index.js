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
//  Runtime: 84 ms, faster than 94.39% of JavaScript online submissions for Remove Duplicates from Sorted List.
//  Memory Usage: 40.7 MB, less than 24.89% of JavaScript online submissions for Remove Duplicates from Sorted List.
export default (head) => {
  let copyHead = head;
  while (head) {
    const next = head.next;
    if (!next) {
      return copyHead;
    }
    if (head.val === next.val) {
      head.next = next.next;
    } else {
      head = next;
    }
  }
  return copyHead;
};
