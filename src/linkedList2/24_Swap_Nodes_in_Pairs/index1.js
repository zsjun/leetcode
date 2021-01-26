// Runtime: 84 ms, faster than 24.43% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 38.8 MB, less than 25.70% of JavaScript online submissions for Swap Nodes in Pairs.
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let p = head;
  let s;
  if (p && p.next) {
    s = p.next;
    p.next = p.next.next;
    s.next = p;
    head = s;
    while (s.next && p.next && p.next.next) {
      s = p.next.next;
      p.next.next = s.next;
      s.next = p.next;
      p.next = s;
      p = s.next;
    }
  }
  return head;
};
