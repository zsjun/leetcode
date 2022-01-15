/**
 * // Definition for a Node.

 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
/*
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let curr = head;
  // 复制
  while (curr) {
    let copy = new Node(curr.val, curr.next, null);
    copy.next = curr.next;
    curr.next = copy;
    curr = curr.next;
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }

  curr = head;
  let result = head.next;
  let resPtr = result;
  while (curr) {
    curr.next = curr.next.next;
    curr = curr.next;
    resPtr.next = resPtr.next ? resPtr.next.next : null;
    resPtr = resPtr.next;
  }

  return result;
};
