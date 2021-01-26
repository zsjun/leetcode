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
// Runtime: 100 ms, faster than 23.11% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 42 MB, less than 65.81% of JavaScript online submissions for Palindrome Linked List.
export default (head) => {
  let count = 0;
  let copyHead = head;
  while (head) {
    ++count;
    head = head.next;
  }
  let half;
  if (count % 2 === 0) {
    half = count / 2 + 1;
  } else {
    half = Math.ceil(count / 2) + 1;
  }
  let curHead = copyHead;
  const stack = [];
  while (half > 1) {
    --half;
    stack.push(curHead.val);
    curHead = curHead.next;
  }
  if (count % 2 !== 0) {
    stack.pop();
  }
  while (curHead) {
    if (curHead.val !== stack.pop()) {
      return false;
    }
    curHead = curHead.next;
  }
  return true;
};
