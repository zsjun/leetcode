/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
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
var reverseList = function (head) {
  if (!head) return null;
  const nextNode = reverseList(head.next);
  if (head.next) {
    head.next.next = head;
    head.next = null;
  } else {
    return head;
  }
  return nextNode;
};

var isPalindrome = function (head) {
  const res = [];
  let cur = head;
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  let newHead = reverseList(cur);
  while (newHead) {
    const val = res.shift();
    if (val !== newHead.val) {
      return false;
    }

    newHead = newHead.next;
  }
  return res.length === 0;
};
