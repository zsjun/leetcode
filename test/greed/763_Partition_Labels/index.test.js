import partitionLabels from "../../../src/greed/763_Partition_Labels/index";

test("1", () => {
  expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
});
