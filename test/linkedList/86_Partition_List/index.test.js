import {
  getArr,
  creatLinkList,
} from "../../../src/linkedList/92_Reverse_Linked_List_II/index";
import partition from "../../../src/linkedList/86_Partition_List/index";
test("1", () => {
  const head = creatLinkList([2, 1]);
  const arr = getArr(head);
  expect(getArr(partition(head, 2))).toEqual([1, 2]);
});
test("2", () => {
  const head = creatLinkList([1, 4, 3, 2, 5, 2]);
  const arr = getArr(head);
  expect(getArr(partition(head, 3))).toEqual([1, 2, 2, 4, 3, 5]);
});
// [1, 1];
// 2;
test("3", () => {
  const head = creatLinkList([1, 1]);
  const arr = getArr(head);
  expect(getArr(partition(head, 2))).toEqual([1, 1]);
});
[1, 2, 3];
test("4", () => {
  const head = creatLinkList([1, 2, 3]);
  const arr = getArr(head);
  expect(getArr(partition(head, 4))).toEqual([1, 2, 3]);
});
test("5", () => {
  const head = creatLinkList([2, 1, 3]);
  const arr = getArr(head);
  expect(getArr(partition(head, 2))).toEqual([1, 2, 3]);
});
test("6", () => {
  const head = creatLinkList([2, 3, 1]);
  const arr = getArr(head);
  expect(getArr(partition(head, 2))).toEqual([1, 2, 3]);
});
// test("2", () => {
//   const head = creatLinkList([3, 5]);
//   const arr = getArr(head);
//   expect(getArr(reverseBetween(head, 2, 2))).toEqual([3, 5]);
// });

// test("3", () => {
//   const head = creatLinkList([1, 2, 3]);
//   const arr = getArr(head);
//   expect(getArr(reverseBetween(head, 1, 2))).toEqual([2, 1, 3]);
// });
