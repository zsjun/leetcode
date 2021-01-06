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
// Runtime: 364 ms, faster than 27.05% of JavaScript online submissions for Merge k Sorted Lists.
// Memory Usage: 43.7 MB, less than 74.12% of JavaScript online submissions for Merge k Sorted Lists.
const merge = (list1, list2) => {
  if (!list1 || !list2) return list1 || list2;
  let node = new ListNode(null);
  // 暂存头结点
  const root = node;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  if (list1) node.next = list1;
  if (list2) node.next = list2;
  return root.next;
};

export default (lists) => {
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root || null;
};
