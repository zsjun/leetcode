import insertionSortList from "../../../src/sort/147_Insertion_Sort_List/index";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("1", () => {
  // [4, 2, 1, 3];
  const head = new ListNode(4);
  const node2 = new ListNode(2);
  const node1 = new ListNode(1);
  const node3 = new ListNode(3);
  head.next = node2;
  node2.next = node1;
  node1.next = node3;
  expect(insertionSortList(head)).toEqual([1, 2, 3, 4]);
});
