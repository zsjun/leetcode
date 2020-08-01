import readBinaryWatch from "../../../src/bitManipulation/401_Binary_Watch/index";

test("1", () => {
  expect(readBinaryWatch(1)).toEqual([
    "0:01",
    "0:02",
    "0:04",
    "0:08",
    "0:16",
    "0:32",
    "1:00",
    "2:00",
    "4:00",
    "8:00",
  ]);
});
