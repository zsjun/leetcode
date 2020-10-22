/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  let head = null;
  let former = null;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      if (former === null) {
        former = l2;
      } else {
        former.next = l2;
      }

      if (head === null) head = former;
      else former = former.next;
      l2 = l2.next;
    } else {
      if (former === null) former = l1;
      else former.next = l1;
      if (head === null) head = former;
      else former = former.next;
      l1 = l1.next;
    }
  }
  if (l2 !== null) l1 = l2;
  former.next = l1;
  return head;
};
const mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);
  const halfListsLength = Math.floor(lists.length / 2);
  return mergeTwoLists(mergeKLists(lists.slice(0, halfListsLength)), mergeKLists(lists.slice(halfListsLength)));
};

export default mergeKLists;
