import minWindow from "../../../src/twoPoints/76_Minimum_Window_Substring/index";

test("1", () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
});

test("1", () => {
  expect(minWindow("ab", "a")).toBe("a");
});

// ECODEBANc
// ADOBEC
// DOBECOD
// ADOBECODEB A N   C
// 0123456789 10 11  12
// ADOBEC
// DOBECODEB
// DOBECODEBA
// BECODEBA
// 4,12 2
// ECODEBA
// ECODEBA
// BECODEBA
