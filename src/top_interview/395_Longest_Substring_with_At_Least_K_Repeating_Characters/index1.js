/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export default (s, k) => {
  if (s.length === 0) return 0;
  let max = 0;
  let allLetters = new Array(26);
  let i;
  let j;
  let uniqueLetterNum;
  // not less than k number
  let notLessThanKNum;
  // loop a-z 26 letter

  for (let h = 1; h < 27; h++) {
    allLetters.fill(0);
    i = 0;
    j = 0;
    uniqueLetterNum = 0;
    // not less than k number
    notLessThanKNum = 0;
    while (j < s.length) {
      if (uniqueLetterNum <= h) {
        const idx = s.charCodeAt(j) - 97;
        if (allLetters[idx] === 0) {
          uniqueLetterNum++;
        }
        allLetters[idx]++;
        if (allLetters[idx] === k) {
          notLessThanKNum++;
        }
        j++;
      } else {
        const idx = s.charCodeAt(i) - 97;
        if (allLetters[idx] === k) {
          notLessThanKNum--;
        }
        if (allLetters[idx] > 0) {
          allLetters[idx]--;
        }
        if (allLetters[idx] === 0) {
          uniqueLetterNum--;
        }
        i++;
      }

      if (uniqueLetterNum === h && h === notLessThanKNum) {
        max = Math.max(j - i, max);
      }
    }
  }

  return max;
};


public class Solution {
    public int longestSubstring(String s, int k) {
        char[] str = s.toCharArray();
        // 26 character
        int[] counts = new int[26];
        // unique =  diff char number, noLessThanK = not less than k number
        int h, i, j, idx, max = 0, unique, noLessThanK;

        // loop 26 char because only a-z, loop when only has 1 char and two char ...
        for (h = 1; h <= 26; h++) {
            // init 0
            Arrays.fill(counts, 0);
            i = 0;
            j = 0;
            unique = 0;
            noLessThanK = 0;
            // two points
            while (j < str.length) {
                //
                if (unique <= h) {
                    idx = str[j] - 'a';
                    if (counts[idx] == 0)
                        // first add
                        unique++;
                    counts[idx]++;
                    if (counts[idx] == k)
                        noLessThanK++;
                    j++;
                }
                else {
                    idx = str[i] - 'a';
                    if (counts[idx] == k)
                        noLessThanK--;
                    counts[idx]--;
                    if (counts[idx] == 0)
                        // if del finish
                        unique--;
                    i++;
                }
                // if i to j has unique char and any char not less than k
                if (unique == h && unique == noLessThanK)
                    max = Math.max(j - i, max);
            }
        }

        return max;
    }
}