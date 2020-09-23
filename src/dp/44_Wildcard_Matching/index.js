/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export default (s, p) => {
  let sStart = 0;
  let pStart = 0;
  // * position in p
  let PstartIndex = -1;
  // s startIndex and PstartIndex next position
  let SstartIndex = 0;

  while (sStart < s.length) {
    if (pStart < p.length && (s.charAt(sStart) === p.charAt(pStart) || p.charAt(pStart) === "?")) {
      pStart++;
      sStart++;
    } else if (pStart < p.length && p.charAt(pStart) === "*") {
      PstartIndex = pStart;
      pStart++;
      SstartIndex = sStart;
      // if sStart  === s.length-1 but get false, restart
    } else if (PstartIndex !== -1) {
      // SstartIndex++;
      SstartIndex++;
      sStart = SstartIndex;
      pStart = PstartIndex + 1;
    } else {
      return false;
    }
  }

  while (pStart < p.length && p.charAt(pStart) === "*") {
    pStart++;
  }
  return pStart >= p.length;
};
