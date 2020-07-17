187. Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]

思考路程
1 很简单，和 49 题目有点类似，用同样的方法,只是这里用到 hashmap，把每个子串都 hash 了，如果出现相同的，则加入到结果中,这里可以使用 Set，刚好可以去掉重复的元素。

使用了 Set 去重
算法时间复杂度 O（nlgn） 空间复杂度 O（n）
