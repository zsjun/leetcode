/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */

export default (wordlist, queries) => {
  const perfectSet = new Set();
  const upperMap = new Map();
  const vowelMap = new Map();
  const vowed = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < wordlist.length; i++) {
    perfectSet.add(wordlist[i]);
    if (!upperMap.has(wordlist[i].toLowerCase())) {
      upperMap.set(wordlist[i].toLowerCase(), wordlist[i]);
    }
    let wordLowCase = wordlist[i].toLowerCase();
    const replaceWordLowCase = wordLowCase.replace(/[aeiou]/gi, "*");
    if (!vowelMap.has(replaceWordLowCase)) {
      vowelMap.set(replaceWordLowCase, wordlist[i]);
    }
  }
  for (let i = 0; i < queries.length; i++) {
    if (perfectSet.has(queries[i])) {
      continue;
    } else if (upperMap.has(queries[i].toLowerCase())) {
      queries[i] = upperMap.get(queries[i].toLowerCase());
    } else if (vowelMap.has(queries[i].toLowerCase().replace(/[aeiou]/gi, "*"))) {
      queries[i] = vowelMap.get(queries[i].toLowerCase().replace(/[aeiou]/gi, "*"));
    } else {
      queries[i] = "";
    }
  }
  return queries;
};
