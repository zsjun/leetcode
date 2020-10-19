10. Regular Expression Matching

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '\*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

Input: s = "ab", p = "._"
Output: true
Explanation: "._" means "zero or more (\*) of any character (.)".

Example 4:

Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

Example 5:

Input: s = "mississippi", p = "mis*is*p\*."
Output: false

Constraints:

    0 <= s.length <= 20
    0 <= p.length <= 30
    s contains only lowercase English letters.
    p contains only lowercase English letters, '.', and '*'.

思考地图
1 分治，设置两个指针，一个指向字符串 s 的 i，一个指向匹配的 p 的 j，当 s[i] === p[j] 如果 p[j++] !== "\*", i++, j++

如果 p[j++] === "\*"的时候，找到从 i 开始有多少个 s[i]的数量 number，然后从 j++开始发现有多少个 s[i]为 numbser2，如果 number2 <= number i = i+number j = j+number2
如果 s[i] !== p[j] 继续分析各种情况
感觉太复杂了

2 dp， dp[i][j]
