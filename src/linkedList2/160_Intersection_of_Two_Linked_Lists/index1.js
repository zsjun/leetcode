// Runtime: 128 ms, faster than 18.76% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 46 MB, less than 77.97% of JavaScript online submissions for Intersection of Two Linked Lists.
export default (headA, headB) => {
  let copyA = headA;
  let copyB = headB;

  let count = 0;
  while (headA && headB && count < 3) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
    if (!headA) {
      headA = copyB;
      ++count;
    }
    if (!headB) {
      headB = copyA;
      ++count;
    }
  }

  return null;
};
