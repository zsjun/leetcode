import NestedIterator from "../../../src/top_interview/341_Flatten_Nested_List_Iterator/index";

test("1", () => {
  var i = new NestedIterator([[1, 1], 2, [1, 1]]),
    a = [];
  while (i.hasNext()) a.push(i.next());
  expect(a).toEqual([1, 1, 2, 1, 1]);
});
