/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head ? head.next : null;
  while (slow !== fast && slow && fast) {
    slow = slow.next;
    fast = fast?.next?.next;
  }
  return slow === fast;
};
