/**
 * @param {string} s
 * @return {string[]}
 */
const backTrick = (s, start, tempList, res) => {
  if (start >= s.length && tempList.length === 4) {
    res.push([...tempList].join("."));
    return;
  }
  if (start >= s.length && tempList.length !== 4) {
    return;
  }
  if (tempList.length > 4) {
    return;
  }
  const tempS = s.substring(start, start + 1);
  if (+tempS >= 0 && tempS) {
    tempList.push(tempS);
    backTrick(s, start + 1, tempList, res);
    tempList.pop();
  }
  const tempS1 = s.substring(start, start + 2);
  if (+tempS1 >= 10 && +tempS1 <= 99) {
    tempList.push(tempS1);
    backTrick(s, start + 2, tempList, res);
    tempList.pop();
  }
  const tempS2 = s.substring(start, start + 3);
  if (+tempS2 >= 100 && +tempS2 <= 255) {
    tempList.push(tempS2);
    backTrick(s, start + 3, tempList, res);
    tempList.pop();
  }
};
export default function (s) {
  const res = [];
  backTrick(s, 0, [], res);
  return res;
}
