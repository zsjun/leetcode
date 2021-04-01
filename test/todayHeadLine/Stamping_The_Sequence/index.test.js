import movesToStamp from '../../../src/todayHeadLine/Stamping_The_Sequence/index1';

test('1', () => {
  expect(movesToStamp('abc', 'ababc')).toEqual([0, 2]);
});
