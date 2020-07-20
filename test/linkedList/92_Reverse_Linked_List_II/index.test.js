import reverseBetween, { getArr, creatLinkList } from "../../../src/linkedList/92_Reverse_Linked_List_II/index";

test("1", () => {
  const head = creatLinkList([3, 5]);
  const arr = getArr(head);
  expect(getArr(reverseBetween(head, 1, 2))).toEqual([5, 3]);
});
test("2", () => {
  const head = creatLinkList([3, 5]);
  const arr = getArr(head);
  expect(getArr(reverseBetween(head, 2, 2))).toEqual([3, 5]);
});

test("3", () => {
  const head = creatLinkList([1, 2, 3]);
  const arr = getArr(head);
  expect(getArr(reverseBetween(head, 1, 2))).toEqual([2, 1, 3]);
});
