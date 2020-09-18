/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  let res = false;
  if (wordDict.length === 1) {
    return wordDict[0] === s;
  }
  for (let i = 0; i < wordDict.length; i++) {
    let tempS = s;
    let res1 = true;
    if (s.indexOf(wordDict[i]) === -1) continue;
    tempS = tempS.replace(new RegExp(wordDict[i], "gi"), ",");
    let temps1 = tempS.replace(new RegExp(wordDict[i], "gi"), "");
    let nexWorDict = wordDict.slice(0, i).concat(wordDict.slice(i + 1));
    if (!temps1) {
      res1 = true;
    } else {
      for (let j = 0; j < tempS.split(",").length; j++) {
        const _st = tempS.split(",")[j];
        if (_st && nexWorDict.length > 0) {
          res1 = res1 && wordBreak(_st, nexWorDict);
        }
      }
    }
    res = res || res1;
    if (res) return res;
  }
  return res;
};

export default wordBreak;
