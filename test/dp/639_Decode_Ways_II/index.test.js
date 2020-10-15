import numDecodings from "../../../src/dp/639_Decode_Ways_II/index";

test("1", () => {
  expect(numDecodings("*1*1*0")).toBe(404);
});

test("2", () => {
  expect(numDecodings("1*72*")).toBe(285);
});
