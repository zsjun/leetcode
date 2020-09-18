139. Word Break
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.

Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

思考
1 动态规划一般是一维数组或者是两维数组，比如这题中存在一个s和wordDict，很明显是使用一维数组，既然有两个，一个是s，还有一个是wordDict，肯定是有一个不变，然后另外一个变化
所以这里可以尝试wordDict不变，s变化，或者尝试s变化，wordDict不变，思考后，发现如果wordDict变化的话，有些逻辑问题，也就是很多测试用例通不过。

所以这里让s变化，dp[i] 表示s(0,i)是否可以被wordDict表示，所以那dp[i+1]可以想到如果j到i+1可以组成的单词，存在wordDict中，同时dp[j]为true，则dp【i+1]肯定也为true

2
其实最容易想到的递归，但是如果用js写递归，很容易就时间超时了，所以可以设置一些条件，节省时间。
