76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

思考路程
1 首先想到用两个指针，一个指在首先发现的地方，然后一直向前遍历，但是这里涉及到了一个更新第一个指针的问题，什么时候更新，更新到什么地方，感觉很麻烦，放弃。
2 