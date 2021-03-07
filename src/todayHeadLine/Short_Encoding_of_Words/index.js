/**
 * @param {string[]} words
 * @return {number}
 */
export default (words) => {
  words.sort((a, b) => b.length - a.length);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (words[j].charAt(words[j].length - 1) === words[i].charAt(words[i].length - 1)) {
        const len = words[i].length;
        if (words[j].substring(words[j].length - len) === words[i]) {
          words[i] = "1000";
          break;
        }
      }
    }
  }
  words = words.filter((item) => item !== "1000");

  return (words.join("#") + "#").length;
};
