import shuffle from '../../../src/todayHeadLine/Advantage_Shuffle/index';

test('1', () => {
  expect(shuffle([12, 24, 8, 32], [13, 25, 32, 11])).toEqual([24, 32, 8, 12]);
});
