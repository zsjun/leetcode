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
2 后来想到可以用 map 遍历一遍，形成一个类似 hashmap 的，然后遍历需要查找的字符串，找个每个字符开始的最小长度，但是这里有个问题，逻辑搞的很复杂。
3 后来还想到用 lastIndexOf 来找到最后出现的字符，发现好像也没有什么用
4 看了题解，感觉确实牛逼，原理很简单，首先在 s 中发现包含字符串 t 的子串 t1，然后再在 t1 中找到第一次出现在 t 中的字符，比如 a，然后在 s-t 的剩下字符串中查找出现 a 的位置，再更新最小子串距离，如此循环

算法时间复杂度 O（n） 空间复杂度 O（n）

心得
1 利用指针移动获取最小或者最大字符，关键是找到之后，如何恢复成下一次查找
